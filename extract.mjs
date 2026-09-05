import fs from 'node:fs';

export function flight(file) {
  const html = fs.readFileSync(file, 'utf8');
  const re = /self\.__next_f\.push\(\[1,\s*"((?:\\.|[^"\\])*)"\]\)/g;
  let m, buf = '';
  while ((m = re.exec(html))) {
    try { buf += JSON.parse('"' + m[1] + '"'); } catch { }
  }
  return buf;
}

export function extractSteps(file) {
  const buf = flight(file);
  const steps = [];
  const marker = '"type":"steps"';
  let idx = 0;
  while ((idx = buf.indexOf(marker, idx)) !== -1) {
    const start = buf.lastIndexOf('{"id":', idx);
    if (start === -1) { idx += marker.length; continue; }
    let depth = 0, end = -1, inStr = false, esc = false;
    for (let i = start; i < buf.length; i++) {
      const c = buf[i];
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
    }
    if (end === -1) break;
    try {
      const o = JSON.parse(buf.slice(start, end));
      if (o.type === 'steps' && o.title !== undefined) steps.push(o);
    } catch { }
    idx = end;
  }
  const seen = new Map();
  for (const s of steps) {
    const prev = seen.get(s.id);
    if (!prev || JSON.stringify(s).length > JSON.stringify(prev).length) seen.set(s.id, s);
  }
  return [...seen.values()].sort((a, b) => a.order - b.order);
}

if ((process.argv[1] || '').endsWith('extract.mjs')) {
  const steps = extractSteps(process.argv[2]);
  console.error('steps:', steps.length);
  console.log(JSON.stringify(steps.map(s => ({ id: s.id, order: s.order, title: s.title, keys: Object.keys(s) })), null, 1));
}
