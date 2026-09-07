import fs from 'node:fs';
import { extractSteps } from './extract.mjs';
import { TIPS, ARTICLE_COMMENTS } from './tips.mjs';
import { KEEP, SALVAGE, SALVAGE_INTRO } from './salvage.mjs';
import { PREP, PREP_TASKS, PREP_BLOCKED } from './prep.mjs';

const SOURCES = {
  indx1: { file: 'raw/indx_1-introduction_1096223.html', slug: '1-introduction_1096223', label: 'INDX 1', guide: 'INDX conversion guide \u2013 1. Introduction' },
  indx2: { file: 'raw/indx_2-heatbed-electronics-disassembly_1096231.html', slug: '2-printer-preparation-disassembly_1096231', label: 'INDX 2', guide: 'INDX conversion guide \u2013 2. Printer preparation & disassembly' },
  indx3: { file: 'raw/indx_3-z-axis-upgrade_1096239.html', slug: '3-z-axis-upgrade_1096239', label: 'INDX 3', guide: 'INDX conversion guide \u2013 3. Z-axis upgrade' },
  indx4: { file: 'raw/indx_4-indx-toolhead-side-filament-sensors_1096247.html', slug: '4-indx-toolhead-side-filament-sensors_1096247', label: 'INDX 4', guide: 'INDX conversion guide \u2013 4. INDX Toolhead & Side filament sensors' },
  indx5: { file: 'raw/indx_5-spoolholders-tool-dock-assembly_1096255.html', slug: '5-spoolholders-tool-dock-assembly_1096255', label: 'INDX 5', guide: 'INDX conversion guide \u2013 5. Spoolholders & Tool dock assembly' },
  indx6: { file: 'raw/indx_6-preflight-check_1096263.html', slug: '6-preflight-check_1096263', label: 'INDX 6', guide: 'INDX conversion guide \u2013 6. Preflight check' },
  gen2belts: { file: 'raw/gen2_3-belts-upgrade_1110672.html', slug: '3-belts-upgrade_1110672', label: 'GEN2 3', guide: 'CORE One+ Gen 2 guide \u2013 3. Belts upgrade' },
  gen2bed: { file: 'raw/gen2_4-heatbed-upgrade_1110680.html', slug: '4-heatbed-upgrade_1110680', label: 'GEN2 4', guide: 'CORE One+ Gen 2 guide \u2013 4. Heatbed upgrade' },
};

const STEPS = {};
const REF = new Map();
for (const [key, src] of Object.entries(SOURCES)) {
  const list = extractSteps(src.file);
  STEPS[key] = { src, list, byId: new Map(list.map((s) => [s.id, s])) };
  // Prusa numbers steps by position within the chapter, not by the `order` field.
  list.forEach((s, i) => REF.set(s.id, {
    label: `${src.label}.${i + 1}`,
    url: `https://help.prusa3d.com/guide/${src.slug}#${s.id}`,
    title: s.title,
  }));
}

/** Replace {{stepId}} placeholders in prose with a live label + link. */
function refs(html) {
  return String(html).replace(/\{\{(\d+)\}\}/g, (m, id) => {
    const r = REF.get(Number(id));
    if (!r) return m;
    return `<a class="sref" href="${r.url}" target="_blank" rel="noopener" title="${esc(r.title)}">${r.label}</a>`;
  });
}

const IMG = 'https://help.prusa3d.com/wp-content/uploads/2026/08/';
const IMG9 = 'https://help.prusa3d.com/wp-content/uploads/2026/09/';
const ART = 'https://help.prusa3d.com/article/assemblling-the-prusa-indx-core-one-with-the-gen-2-upgrade_1147602';

/** Pick steps from a chapter between two ids (inclusive), in guide order. */
function range(key, fromId, toId, opts = {}) {
  const { list } = STEPS[key];
  const a = list.findIndex((s) => s.id === fromId);
  const b = list.findIndex((s) => s.id === toId);
  if (a < 0 || b < 0) throw new Error(`range ${key} ${fromId}-${toId} not found`);
  const skip = new Set(opts.skip || []);
  return list.slice(a, b + 1).filter((s) => !skip.has(s.id)).map((s) => ({ key, id: s.id }));
}
const one = (key, id) => ({ key, id });

// Custom (article-only) steps -------------------------------------------------
const c = (o) => ({ custom: true, ...o });

const PLAN = [
  {
    title: 'Phase 0 \u2013 Read this first',
    intro: `A single linear merge of the <b>Prusa CORE One INDX conversion</b> guide and the <b>CORE One+ (Gen 2)</b> upgrade guide,
      following the switching order defined in <a href="${ART}" target="_blank" rel="noopener">Prusa\u2019s combined article</a>,
      with the duplicated and superseded steps removed.`,
    items: [
      c({
        id: 'overview',
        title: 'What this guide covers, and in what order',
        lines: [
          ['violet', 0, 'End state: a <b>Prusa CORE One+ (Gen 2) with INDX</b> \u2013 new 1.5GT belts and T21 pulleys, new heatbed expansion joints, and the INDX multi-tool head with 8 (or 4) nozzle tools.'],
          ['blue', 0, 'You are following <b>three</b> documents at once. This page merges them so you never have to jump:'],
          ['blue', 1, '<b>INDX conversion guide</b> \u2013 the master document. Orange badges.'],
          ['blue', 1, '<b>CORE One+ (Gen 2) upgrade guide</b> \u2013 belts chapter 3 and heatbed chapter 4 only. Blue badges.'],
          ['blue', 1, '<b>The combined article</b> \u2013 the glue steps that exist in neither guide. Purple badges.'],
          ['green', 0, 'The Gen 2 guide\u2019s own chapters 1, 2 and 5 are <b>not used</b> \u2013 the INDX guide\u2019s equivalents replace them.'],
          [null, 0, 'note', 'If you have the INDX conversion kit for CORE One+, <b>the Gen 2 parts are already inside the INDX UPGRADE box</b> \u2013 you do not need a separate Gen 2 kit.'],
          [null, 0, 'caution', 'This assumes your printer is already a <b>CORE One+</b>. The Gen 2 upgrade is documented as \u201cCORE One+ \u2192 CORE One+ (Gen 2)\u201d. If you are on a plain CORE One, install the CORE One \u2192 CORE One+ kit first; plenty of people report the Gen 2 + INDX path working fine on converted original CORE Ones, but expect the odd part to look different (shorter motor shafts, unlubricated tensioner screws).'],
          [null, 0, 'reminder', 'Every step here links back to the original Prusa step. If anything looks wrong, trust the original and tell me.'],
        ],
      }),
      ...range('indx1', 1096271, 1096924),
      c({
        id: 'panels-early',
        title: 'Optional but recommended: plan to remove both side panels early',
        note: 'Community shortcut \u00b7 article comment',
        lines: [
          ['violet', 0, 'The official order removes the <b>left</b> panel + cover in Phase 4 and the <b>right</b> panel + cover in Phase 9.'],
          ['green', 0, 'Many builders take <b>all four off right after the electronics are disconnected</b> (end of Phase 1) instead.'],
          ['green', 1, 'The printer gets noticeably lighter and easier to turn.'],
          ['green', 1, 'You can actually see into the frame for the bed spacers and the offset sensor.'],
          ['green', 1, 'Nothing later depends on them being fitted until they go back on in Phases 12, 16 and 17.'],
          [null, 0, 'note', 'If you do this, Phases 4 and 9 become a quick verification instead of work. Tick this step to remind yourself of the choice \u2013 the actual removal instructions are in those phases.'],
        ],
        tips: [['Tkadla (article comment)', ARTICLE_COMMENTS[0][1]]],
      }),
    ],
  },
  {
    title: 'Phase 1 \u2013 Printer preparation & disassembly',
    intro: `INDX chapter 2, complete. Firmware, filament out, power off, then strip the top, the door, the electronics
      connections and the whole Nextruder / print head. Nothing from the Gen 2 guide is needed yet.`,
    items: range('indx2', 1096990, 1098670),
  },
  {
    title: 'Phase 2 \u2013 Z-axis: remove the heatbed',
    intro: '{{1098695}} \u2192 {{1098905}}. The heatbed comes out completely, which makes the Gen 2 expansion-joint work later much easier.',
    items: range('indx3', 1098695, 1098905),
  },
  {
    title: 'Phase 3 \u2013 INDX heatbed spacers (left & right)',
    intro: '{{1098993}} \u2192 {{1099288}}.',
    items: range('indx3', 1098993, 1099288),
  },
  {
    title: 'Phase 4 \u2013 Motor cables and the left side panel',
    intro: `Article section \u201cSecuring the bed spacer \u2013 right, additional information\u201d. The Gen 2 work needs both motors free
      and the left side of the frame open.`,
    items: [
      c({
        id: 'xy-cables',
        title: 'Disconnect the X and Y motor cables',
        note: 'Article: \u201cSecuring the bed spacer \u2013 right, additional information\u201d',
        lines: [
          ['violet', 0, 'Press the safety latch and <b>disconnect the X and Y motor cables</b> from the xBuddy board at the back of the printer.'],
          ['green', 1, 'Gently pull the cables to create some slack, but <b>keep the connectors inside the electronics compartment</b>.'],
          [null, 0, 'reminder', 'They get plugged back in near the very end, in Phase 16.'],
        ],
        images: [[IMG + 'b4f150ea3fa5291bc09807d8eb8bd6a5-800x600.jpeg', IMG + 'b4f150ea3fa5291bc09807d8eb8bd6a5.jpeg']],
      }),
      c({
        id: 'left-cover',
        title: 'Remove the left top see-through cover',
        note: 'Article \u00b7 not in either guide at this point',
        lines: [
          ['violet', 0, 'Remove all <b>five nylon rivets</b> securing the left top see-through side cover.'],
          ['green', 1, 'Support the cover by hand as you pull the last rivets so it cannot fall.'],
          ['green', 0, 'Set the cover aside somewhere clean and flat. <b>Keep the rivets</b> \u2013 it goes back on in Phase 12.'],
        ],
        images: [
          [IMG + 'd4f9df5f095c559fca04750d9a89bb3d_painted.jpeg', IMG + 'd4f9df5f095c559fca04750d9a89bb3d_painted.jpeg'],
          [IMG + '7976ecd1810830a0d0564063ce307a28_painted.jpeg', IMG + '7976ecd1810830a0d0564063ce307a28_painted.jpeg'],
        ],
      }),
      c({
        id: 'left-panel',
        title: 'Remove the left steel side panel',
        note: 'Article \u00b7 not in either guide at this point',
        lines: [
          ['violet', 0, 'Remove the <b>eleven nylon rivets</b> securing the left steel side panel.'],
          ['green', 1, 'Support the panel by hand when the last rivets come out.'],
          ['green', 0, 'Take the panel off the printer. It stays off until Phase 16.'],
          [null, 0, 'note', 'From here on, the INDX guide photos still show this panel in place. Ignore that \u2013 proceed as if it were removed.'],
        ],
        images: [[IMG + 'f7aec23c4e1c66651db9835f957ba2db_painted-800x600.jpeg', IMG + 'f7aec23c4e1c66651db9835f957ba2db_painted.jpeg']],
      }),
    ],
  },
  {
    title: 'Phase 5 \u2013 Rear bed spacer & INDX offset sensor',
    intro: '{{1098949}} \u2192 {{1099623}}. Note the deliberately <b>half-tightened</b> screw at {{1099523}} \u2013 that is the Gen 2 difference, and it is finished in Phase 16.',
    items: range('indx3', 1098949, 1099623),
  },
  {
    title: 'Phase 6 \u2013 GEN 2: new heatbed expansion joints',
    intro: `Switch to the <b>Gen 2 guide</b>, {{1110931}} \u2192 {{1110975}}. The Gen 2 guide shows the heatbed leaning against the back of
      the printer; yours is out on the bench, which is better. <b>This is the phase people damage parts in</b> \u2013 read the notes first.`,
    items: range('gen2bed', 1110931, 1110975),
  },
  {
    title: 'Phase 7 \u2013 INDX: cable cover, heatbed refit, bed-stop',
    intro: 'Back to the INDX guide, {{1099677}} \u2192 {{1100478}}. The heatbed goes back in but its screws stay <b>loose</b> \u2013 they are torqued in Phase 15.',
    items: range('indx3', 1099677, 1100478),
  },
  {
    title: 'Phase 8 \u2013 Loosen and release the belts',
    intro: '{{1100576}} \u2192 {{1100696}}. Last INDX steps before the Gen 2 belt block. This replaces Gen 2 steps 3.2 and 3.3.',
    items: range('indx4', 1100576, 1100696),
  },
  {
    title: 'Phase 9 \u2013 Right side panel, guide differences, tensioner lubrication',
    intro: `Article section \u201cAdditional information and removing the belts\u201d. Read all of it <b>before</b> touching the Gen 2 belt chapter.`,
    items: [
      c({
        id: 'right-cover',
        title: 'Remove the right top see-through cover',
        note: 'Article: \u201cAdditional information and removing the belts\u201d',
        lines: [
          ['violet', 0, 'Remove all <b>five nylon rivets</b> securing the right top see-through side cover.'],
          ['green', 1, 'Support the cover by hand when the last rivet comes out.'],
          ['green', 0, 'Set it aside next to the left one. It goes back on in Phase 12.'],
        ],
        images: [
          [IMG + '41149a0d7a481194fb53dc905d11145f.jpg', IMG + '41149a0d7a481194fb53dc905d11145f.jpg'],
          [IMG + '9697fb05c5af8c05366754496445f788.jpg', IMG + '9697fb05c5af8c05366754496445f788.jpg'],
        ],
      }),
      c({
        id: 'right-panel',
        title: 'Remove the right steel side panel',
        note: 'Article \u00b7 replaces {{1104211}}',
        lines: [
          ['violet', 0, 'Remove the <b>eleven nylon rivets</b> securing the right steel side panel and take it off.'],
          ['green', 0, 'It stays off until {{1136729}} in Phase 17. The side handle and side filament sensor mount onto it in Phase 14.'],
          [null, 0, 'reminder', 'This makes {{1104211}} redundant \u2013 that step is marked as skipped in Phase 14.'],
          [null, 0, 'note', 'Bpendragon (article comment): with the panel off and flat on the bench, this is the ideal moment to drill it yourself if you want the expanded-bucket mod.'],
        ],
        images: [[IMG + '5bd0270a9ca89f23a1b2ac488204e54d_painted-800x600.jpeg', IMG + '5bd0270a9ca89f23a1b2ac488204e54d_painted.jpeg']],
      }),
      c({
        id: 'differences',
        title: 'Differences between the two guides (do not be alarmed)',
        note: 'Article: \u201cAdditional information and removing the belts\u201d',
        lines: [
          ['violet', 0, 'From here the photos in the two guides disagree. None of it affects the build:'],
          ['blue', 1, 'The <b>PTFE tube to the filament sensor</b> is already removed in the INDX guide but still visible in the Gen 2 photos.'],
          ['blue', 1, 'The <b>right side panel and cover</b> are still shown in place in the INDX photos. Yours are off.'],
          ['blue', 1, 'The <b>heatbed</b> is shown leaning against the back of the printer in the Gen 2 photos. Yours is installed (loosely).'],
          ['orange', 1, 'The <b>Bowden-guide</b> is shown and re-attached in the Gen 2 guide. <b>The INDX conversion does not use it</b> \u2013 once it is detached from the motor mount, take it out of the printer and put it in the spares box.'],
        ],
        images: [[IMG + '08e1d1426ff1b41a512cb1bdb47f2dbf_painted-800x600.jpeg', IMG + '08e1d1426ff1b41a512cb1bdb47f2dbf_painted.jpeg']],
      }),
      c({
        id: 'lube',
        title: 'Lubricate both belt-tensioner screws',
        note: 'Article: \u201cBelt-tensioner screws\u201d \u00b7 replaces {{1116271}}',
        lines: [
          ['violet', 0, 'Use the <b>Prusa lubricant</b> from the <i>Fasteners 2/2</i> bag of the INDX conversion kit.'],
          ['green', 1, 'Apply a small amount to the tip of <b>both</b> the left and right <b>M3x30 belt-tensioning screws</b> you removed earlier.'],
          ['green', 1, 'Spread it evenly over the whole thread and put the screws back into the belt tensioners.'],
          [null, 0, 'reminder', 'Because you did it here, <b>skip {{1116271}}</b> when it appears later \u2013 it is marked as skipped in Phase 11.'],
          [null, 0, 'note', 'k1mu (step comment): if your printer is an original CORE One that was upgraded, assume the tensioner screws were <i>never</i> lubricated \u2013 do not skip this.'],
        ],
        images: [
          [IMG + '89b9a55171d8c842cf31c2c8b1e4f813-800x600.jpg', IMG + '89b9a55171d8c842cf31c2c8b1e4f813.jpg'],
          [IMG + '281e4b009424e32f5f5848a0e1fe4cbe-800x600.jpg', IMG + '281e4b009424e32f5f5848a0e1fe4cbe.jpg'],
        ],
      }),
    ],
  },
  {
    title: 'Phase 10 \u2013 GEN 2: belts, pulleys and both motors',
    intro: `Gen 2 guide, {{1149188}} \u2192 {{1113491}}. Both motors come off, both pulleys are replaced, both belts are replaced.
      The longest and fiddliest phase \u2013 the pulley orientation notes are the important ones.`,
    items: range('gen2belts', 1149188, 1113491),
    skipped: [1113247],
  },
  {
    title: 'Phase 11 \u2013 INDX: gantry alignment, toolhead, head cable, FS assembly',
    intro: 'Back to the INDX guide, {{1100758}} \u2192 {{1103025}}.',
    items: range('indx4', 1100758, 1103025),
    skipped: [1116271],
  },
  {
    title: 'Phase 12 \u2013 Refit both top see-through covers',
    intro: 'Article section \u201cMounting the side panels, PTFE and right cover\u201d.',
    items: [
      c({
        id: 'covers-back',
        title: 'Mount both top see-through side covers',
        note: 'Article: \u201cMounting the side panels, PTFE and right cover\u201d',
        lines: [
          ['violet', 0, 'Refit the <b>left</b> top see-through cover with <b>four</b> nylon rivets.'],
          ['orange', 1, '<b>Leave the top middle hole empty</b> \u2013 the left side filament sensor mounts there in the next phase ({{1103113}}).'],
          ['violet', 0, 'Refit the <b>right</b> top see-through cover.'],
          ['orange', 1, 'If you have the <b>8-tool</b> INDX, leave the top-middle rivet out on this side too.'],
          [null, 0, 'note', 'The steel side panels stay off for now \u2013 left goes back in Phase 16, right in Phase 17.'],
        ],
        images: [[IMG + '7bcfc5316b09525297fa41e8541e3a57_painted-800x600.jpeg', IMG + '7bcfc5316b09525297fa41e8541e3a57_painted.jpeg']],
      }),
    ],
  },
  {
    title: 'Phase 13 \u2013 INDX: side filament sensors & PTFE tubes',
    intro: '{{1103061}} \u2192 {{1104025}}. Ends the INDX toolhead chapter.',
    items: range('indx4', 1103061, 1104025),
  },
  {
    title: 'Phase 14 \u2013 INDX: nozzle wiper, side handle, dock fan cable',
    intro: '{{1104051}} \u2192 {{1104485}}.',
    items: range('indx5', 1104051, 1104485),
    skipped: [1104211],
  },
  {
    title: 'Phase 15 \u2013 GEN 2: align the expansion joints and fix the heatbed',
    intro: `Back to the Gen 2 guide, {{1110993}} \u2192 {{1111043}}. The loose heatbed screws from Phase 7 finally get torqued.
      <b>Read the alignment notes first</b> \u2013 the official sequence has a known problem with the front-right joint.`,
    items: range('gen2bed', 1110993, 1111043),
  },
  {
    title: 'Phase 16 \u2013 Finish the offset sensor, motors and left panel',
    intro: 'Article section \u201cMounting the left cover, covering the electronics\u201d. This closes out the Gen 2 guide entirely.',
    items: [
      c({
        id: 'offset-screw',
        title: 'Properly secure the offset sensor assembly',
        note: 'Article \u00b7 completes the deferred {{1099523}}',
        lines: [
          ['violet', 0, 'From underneath the Z-carriage, <b>fully tighten the M3x10 screw</b> holding the INDX offset sensor assembly.'],
          [null, 0, 'caution', 'The screw forms its own thread in the plastic. <b>Do not overtighten.</b>'],
          [null, 0, 'note', 'The article photo still shows the right side cover in place \u2013 ignore that, it makes no difference.'],
        ],
        images: [[IMG + 'bf32e183ba1350c643508410af65f897_painted-800x600.jpeg', IMG + 'bf32e183ba1350c643508410af65f897_painted.jpeg']],
      }),
      c({
        id: 'motor-cables-back',
        title: 'Reconnect the X and Y motor cables',
        note: 'Article \u00b7 mirrors {{1144140}}',
        lines: [
          ['violet', 0, 'Connect the <b>left</b> motor cable (X motor) to the <b>left</b> connector on the xBuddy board \u2013 labelled <b>X</b>.'],
          ['violet', 0, 'Connect the <b>right</b> motor cable (Y motor) to the <b>right</b> connector \u2013 labelled <b>Y</b>.'],
          ['green', 1, 'Make sure both safety latches audibly <b>click</b> into place.'],
        ],
        images: [[IMG9 + 'da61ab1d9441471a707a994f74973d71_painted-800x600.jpeg', IMG9 + 'da61ab1d9441471a707a994f74973d71_painted.jpeg']],
      }),
      c({
        id: 'left-panel-back',
        title: 'Mount the left steel side panel',
        note: 'Article \u00b7 end of the CORE One GEN 2 guide',
        lines: [
          ['violet', 0, 'Put the <b>left steel side panel</b> back on the printer.'],
          ['green', 1, 'Secure it with <b>3 nylon rivets only</b>, in the highlighted positions. The rest go in during Phase 17.'],
          [null, 0, 'reminder', 'With this done you are <b>finished with the CORE One Gen 2 guide</b>. Everything from here is pure INDX.'],
        ],
        images: [[IMG + 'ade5132c22b81c5d3766c2c7f7555bb1_painted-800x600.jpeg', IMG + 'ade5132c22b81c5d3766c2c7f7555bb1_painted.jpeg']],
      }),
    ],
  },
  {
    title: 'Phase 17 \u2013 INDX: electronics covers, puck holders, tool dock, top cover',
    intro: '{{1105054}} \u2192 {{1109439}}. The rest of chapter 5, straight through.',
    items: range('indx5', 1105054, 1109439),
  },
  {
    title: 'Phase 18 \u2013 Preflight check, firmware and calibration wizard',
    intro: 'INDX chapter 6, complete. Read the firmware / belt-type note before you start the wizard.',
    items: range('indx6', 1109473, 1110607),
  },
];

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const COLOR_HEX = {
  violet: '#8b5cf6', green: '#22c55e', orange: '#fa6831', blue: '#2563eb',
  light_blue: '#38bdf8', yellow: '#eab308', red: '#ef4444',
};

const ICON_LABEL = { note: 'Info', caution: 'Caution', reminder: 'Remember' };

// Lines that ask for a part salvaged from the user's own printer.
const REUSE_RE = /removed earlier|you removed|previously removed|remove[d]? in the previous step|that you kept|you kept in|set aside when|assembled earlier|from your converted printer/i;

function renderLine(color, level, text, icon, flags) {
  if (icon) {
    return `<div class="cal cal-${esc(icon)}"><span class="cal-tag">${ICON_LABEL[icon] || 'Note'}</span><div>${refs(text)}</div></div>`;
  }
  let chip = '';
  if (REUSE_RE.test(text)) { chip = ' <span class="chip">from your printer</span>'; if (flags) flags.reuse = true; }
  const dot = color
    ? `<span class="hex" style="--c:${COLOR_HEX[color] || '#94a3b8'}"></span>`
    : `<span class="hex hex-plain"></span>`;
  return `<li class="${level ? 'lvl1' : ''}">${dot}<span>${refs(text)}${chip}</span></li>`;
}

function renderLines(lines, flags) {
  // lines: array of prusa line objects OR custom [color, level, text] / [null,0,icon,text]
  let html = '';
  let openList = false;
  const flush = () => { if (openList) { html += '</ul>'; openList = false; } };
  for (const l of lines) {
    let color, level, text, icon;
    if (Array.isArray(l)) {
      if (l[0] === null) { icon = l[2]; text = l[3]; }
      else { color = l[0]; level = l[1]; text = l[2]; }
    } else {
      color = l.meta?.color; level = l.meta?.level; icon = l.meta?.icon; text = l.title;
    }
    if (icon) { flush(); html += renderLine(null, 0, text, icon, flags); }
    else { if (!openList) { html += '<ul class="steplines">'; openList = true; } html += renderLine(color, level, text, null, flags); }
  }
  flush();
  return html;
}

function galleryOf(step) {
  const g = step.media?.gallery || [];
  return g.map((m) => {
    const shown = m.child?.large || m.child?.original || m.large || m.original;
    const full = m.child?.original || m.original;
    return [shown, full];
  }).filter(([a]) => a);
}

function renderImages(pairs) {
  if (!pairs.length) return '';
  return `<div class="gal${pairs.length === 1 ? ' one' : ''}">` + pairs.map(([s, f]) =>
    `<a href="${esc(f)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(s)}" alt=""></a>`).join('') + '</div>';
}

function renderTips(tips) {
  if (!tips || !tips.length) return '';
  return `<div class="tips"><div class="tips-h">Community notes</div>` +
    tips.map(([who, what]) => `<div class="tip"><span class="who">${esc(who)}</span>${refs(what)}</div>`).join('') +
    `</div>`;
}

let n = 0;
let totalPrep = 0;
const sectionsHtml = [];
const tocHtml = [];

for (const [si, sec] of PLAN.entries()) {
  const skipSet = new Set(sec.skipped || []);
  const secId = 'sec' + si;
  const cards = [];
  const stepIds = [];
  let prepCount = 0;

  for (const item of sec.items) {
    n += 1;
    const uid = item.custom ? 'c-' + item.id : `${item.key}-${item.id}`;
    stepIds.push(uid);
    let title, meta, body, images, tips, cls = '';
    const flags = {};
    let keep = '';
    const prepReason = PREP[item.custom ? uid : item.id];
    if (prepReason) { cls += ' prep'; prepCount += 1; totalPrep += 1; }

    if (item.custom) {
      title = item.title;
      meta = `<span class="badge badge-art">Combined article</span>` +
        (item.note ? `<span class="src">${refs(item.note)}</span>` : '');
      body = renderLines(item.lines, flags);
      images = renderImages(item.images || []);
      tips = renderTips(item.tips);
    } else {
      const st = STEPS[item.key].byId.get(item.id);
      if (!st) throw new Error('missing step ' + item.id);
      const src = SOURCES[item.key];
      const r = REF.get(st.id);
      title = st.title;
      const isGen2 = item.key.startsWith('gen2');
      meta = `<a class="badge ${isGen2 ? 'badge-gen2' : 'badge-indx'}" href="${r.url}" target="_blank" rel="noopener" title="${esc(src.guide)}">${r.label} \u2197</a>`;
      body = renderLines(st.lines || [], flags);
      images = renderImages(galleryOf(st));
      tips = renderTips(TIPS[st.id]);
      if (KEEP[st.id]) {
        keep = `<div class="cal cal-keep"><span class="cal-tag">Keep</span><div>${refs(KEEP[st.id])}</div></div>`;
      }
      if (skipSet.has(st.id)) cls += ' skipstep';
    }

    if (flags.reuse) meta += `<span class="badge badge-reuse">reuses old parts</span>`;
    if (keep) meta += `<span class="badge badge-keep">keep parts</span>`;
    if (prepReason) meta += `<span class="badge badge-prep" title="${esc(prepReason)}">no kit needed</span>`;

    const skipBanner = cls.includes('skipstep')
      ? `<div class="cal cal-skip"><span class="cal-tag">Skip</span><div>This step is <b>not part of your build</b> \u2013 it is superseded elsewhere in this guide. Tick it to move on.</div></div>` : '';

    cards.push(`
<article class="step${cls}" id="${uid}" data-step="${uid}">
  <label class="tickzone">
    <input type="checkbox" class="tick" data-step="${uid}">
    <span class="box"></span>
  </label>
  <div class="stepbody">
    <header>
      <span class="num">${n}</span>
      <h3>${title}</h3>
      <div class="meta">${meta}</div>
    </header>
    ${skipBanner}${keep}
    ${body}
    ${images}
    ${tips}
  </div>
</article>`);
  }

  tocHtml.push(`<li><a href="#${secId}"><span class="toc-t">${esc(sec.title)}</span><span class="toc-c" data-toc="${secId}"></span></a></li>`);
  sectionsHtml.push(`
<section class="phase${prepCount ? '' : ' noprep'}" id="${secId}" data-steps='${JSON.stringify(stepIds)}'>
  <div class="phase-h">
    <h2>${esc(sec.title)}</h2>
    <div class="phase-prog"><div class="bar"><i data-secbar="${secId}"></i></div><span data-seccount="${secId}"></span></div>
  </div>
  ${sec.intro ? `<p class="intro">${refs(sec.intro)}</p>` : ''}
  ${cards.join('\n')}
</section>`);
}

const articleCommentsHtml = ARTICLE_COMMENTS
  .map(([who, what]) => `<div class="tip"><span class="who">${esc(who)}</span>${refs(what)}</div>`).join('');

const salvageHtml = SALVAGE.map((g) => `  <div class="sgroup${g.warn ? ' warn' : ''}">
    <h4>${esc(g.group)}</h4>
    <table class="stab">
      <thead><tr><th>Part</th><th>Qty</th><th>Comes off at</th><th>Needed again at</th><th>Notes</th></tr></thead>
      <tbody>${g.rows.map(([p, q, from, to, note]) => `<tr>
        <td class="pn">${refs(p)}</td><td class="qty">${q}</td><td class="mut">${refs(from)}</td>
        <td class="${/scrap|not needed|superseded/i.test(to) ? 'mut' : 'need'}">${refs(to)}</td>
        <td class="mut">${refs(note || '')}</td></tr>`).join('')}</tbody>
    </table>
  </div>`).join('');
const prepTasksHtml = PREP_TASKS.map(([t, d], i) => `
  <label class="ptask">
    <input type="checkbox" class="tickp" data-step="prep-${i}">
    <span class="box"></span>
    <span class="ptxt"><b>${esc(t)}</b><br><span class="mut">${refs(d)}</span></span>
  </label>`).join('');

const prepStepCount = totalPrep;
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CORE One \u2192 CORE One+ (Gen 2) INDX \u2013 personal build guide</title>
<style>
:root{
  --orange:#fa6831; --orange-d:#d94f1c;
  --bg:#f4f5f7; --card:#fff; --ink:#16191d; --mut:#5b6472; --line:#e2e5ea;
  --ok:#16a34a; --skip:#94a3b8;
}
@media (prefers-color-scheme: dark){
  :root{ --bg:#11141a; --card:#181c23; --ink:#e6e9ef; --mut:#9aa4b2; --line:#272d38; }
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:76px}
body{margin:0;background:var(--bg);color:var(--ink);
  font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
a{color:var(--orange-d)}
header.top{position:sticky;top:0;z-index:50;background:var(--card);border-bottom:1px solid var(--line);
  box-shadow:0 1px 10px rgba(0,0,0,.06)}
.topin{max-width:1500px;margin:0 auto;padding:10px 18px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.logo{font-weight:800;letter-spacing:-.02em;font-size:17px;white-space:nowrap}
.logo b{color:var(--orange)}
.grow{flex:1}
.gprog{display:flex;align-items:center;gap:10px;min-width:260px;flex:1}
.gprog .bar{flex:1}
.bar{height:8px;background:var(--line);border-radius:99px;overflow:hidden}
.bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--orange),#ffa06b);
  border-radius:99px;transition:width .25s}
.pct{font-variant-numeric:tabular-nums;font-weight:700;font-size:13px;white-space:nowrap}
button.btn{border:1px solid var(--line);background:transparent;color:var(--ink);border-radius:8px;
  padding:6px 12px;font-size:13px;cursor:pointer}
button.btn:hover{border-color:var(--orange);color:var(--orange)}
button.btn.on{background:var(--orange);border-color:var(--orange);color:#fff}

.wrap{max-width:1500px;margin:0 auto;padding:22px 18px 120px;display:grid;
  grid-template-columns:290px minmax(0,1fr);gap:26px}
@media (max-width:1050px){ .wrap{grid-template-columns:1fr} nav.toc{position:static!important;max-height:none!important} }

nav.toc{position:sticky;top:76px;align-self:start;max-height:calc(100vh - 96px);overflow:auto;
  background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px}
nav.toc h4{margin:2px 0 10px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut)}
nav.toc ol{list-style:none;margin:0;padding:0}
nav.toc a{display:flex;gap:8px;align-items:baseline;padding:7px 8px;border-radius:7px;
  text-decoration:none;color:var(--ink);font-size:13px}
nav.toc a:hover{background:rgba(250,104,49,.09)}
.toc-t{flex:1}
.toc-c{font-size:11px;color:var(--mut);font-variant-numeric:tabular-nums;white-space:nowrap}
.toc-c.full{color:var(--ok);font-weight:700}

.lead{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px 20px;margin:0 0 22px}
.lead h1{margin:0 0 8px;font-size:24px;letter-spacing:-.02em}
.lead p{margin:8px 0;color:var(--mut)}
.lead .keys{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.key{font-size:12px;border:1px solid var(--line);border-radius:99px;padding:4px 10px;color:var(--mut)}

.phase{margin:0 0 34px}
.phase-h{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:0 0 6px}
.phase h2{margin:0;font-size:19px;letter-spacing:-.01em}
.phase-prog{display:flex;align-items:center;gap:8px;min-width:180px;flex:1;max-width:320px}
.phase-prog .bar{flex:1}
.phase-prog span{font-size:12px;color:var(--mut);font-variant-numeric:tabular-nums}
p.intro{margin:0 0 14px;color:var(--mut);font-size:14px}

.step{background:var(--card);border:1px solid var(--line);border-radius:12px;margin:0 0 12px;
  display:grid;grid-template-columns:52px minmax(0,1fr);overflow:hidden;transition:opacity .2s}
.step.done{opacity:.45}
.step.done .stepbody h3{text-decoration:line-through}
.step.skipstep{border-style:dashed}
.tickzone{display:flex;align-items:flex-start;justify-content:center;padding:18px 0 0;cursor:pointer;
  background:linear-gradient(180deg,rgba(0,0,0,.02),transparent);border-right:1px solid var(--line)}
.tick{position:absolute;opacity:0;width:0;height:0}
.box{width:24px;height:24px;border:2px solid var(--line);border-radius:7px;display:block;position:relative;transition:.15s}
.tickzone:hover .box{border-color:var(--orange)}
.tick:checked + .box{background:var(--ok);border-color:var(--ok)}
.tick:checked + .box::after{content:"";position:absolute;left:8px;top:3px;width:6px;height:12px;
  border:solid #fff;border-width:0 2.5px 2.5px 0;transform:rotate(45deg)}
.stepbody{padding:14px 18px 16px;min-width:0}
.stepbody header{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:8px}
.num{font-size:11px;font-weight:800;color:#fff;background:var(--orange);border-radius:6px;padding:2px 7px}
.stepbody h3{margin:0;font-size:16px;letter-spacing:-.01em;flex:1;min-width:200px}
.meta{display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.badge{font-size:11px;font-weight:700;border-radius:6px;padding:3px 8px;text-decoration:none;white-space:nowrap}
.badge-indx{background:rgba(250,104,49,.13);color:var(--orange-d)}
.badge-gen2{background:rgba(37,99,235,.13);color:#2563eb}
.badge-art{background:rgba(139,92,246,.15);color:#7c3aed}
.badge-reuse{background:rgba(14,116,144,.14);color:#0e7490}
.badge-keep{background:rgba(161,98,7,.15);color:#a16207}
.badge-prep{background:rgba(22,163,74,.14);color:#15803d}
.src{font-size:11px;color:var(--mut)}
.chip{display:inline-block;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;
  background:rgba(14,116,144,.14);color:#0e7490;border-radius:5px;padding:1px 6px;margin-left:5px;
  vertical-align:1px;white-space:nowrap}
a.sref{font-weight:700;font-size:.92em;text-decoration:none;border-bottom:1px dotted currentColor;
  white-space:nowrap;color:var(--orange-d)}
a.sref:hover{background:rgba(250,104,49,.12)}

details.salvage{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 18px;margin:0 0 26px}
details.salvage > summary{cursor:pointer;font-size:16px;letter-spacing:-.01em}
details.salvage > summary::marker{color:var(--orange)}
.sgroup{margin:18px 0 0}
.sgroup h4{margin:0 0 8px;font-size:13px;letter-spacing:.03em;text-transform:uppercase;color:var(--orange-d)}
.sgroup.warn h4{color:#b91c1c}
table.stab{width:100%;border-collapse:collapse;font-size:13px}
table.stab th{text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--mut);
  border-bottom:1px solid var(--line);padding:5px 8px 5px 0;font-weight:700}
table.stab td{padding:7px 8px 7px 0;border-bottom:1px solid var(--line);vertical-align:top}
table.stab tr:last-child td{border-bottom:0}
table.stab .pn{font-weight:600;min-width:150px}
table.stab .qty{white-space:nowrap;font-variant-numeric:tabular-nums;color:var(--orange-d);font-weight:700}
table.stab .mut{color:var(--mut)}
table.stab .need{color:#0e7490;font-weight:600}
@media (max-width:760px){
  table.stab thead{display:none}
  table.stab tr{display:block;border-bottom:1px solid var(--line);padding:8px 0}
  table.stab td{display:block;border:0;padding:1px 0}
  table.stab .qty::before{content:"Qty: "}
}

ul.steplines{list-style:none;margin:0 0 10px;padding:0}
ul.steplines li{display:flex;gap:9px;align-items:flex-start;padding:3px 0}
ul.steplines li.lvl1{padding-left:22px}
.hex{width:11px;height:11px;flex:0 0 11px;margin-top:5px;background:var(--c);
  clip-path:polygon(25% 4%,75% 4%,100% 50%,75% 96%,25% 96%,0 50%)}
.hex-plain{background:var(--mut);opacity:.4}

.cal{display:flex;gap:10px;align-items:flex-start;border-radius:9px;padding:9px 12px;margin:8px 0;font-size:14px;
  border-left:3px solid}
.cal-tag{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;
  padding:2px 7px;border-radius:5px;white-space:nowrap;margin-top:2px}
.cal-note{background:rgba(37,99,235,.08);border-color:#2563eb}
.cal-note .cal-tag{background:#2563eb;color:#fff}
.cal-reminder{background:rgba(234,179,8,.10);border-color:#eab308}
.cal-reminder .cal-tag{background:#eab308;color:#3b2f00}
.cal-caution{background:rgba(239,68,68,.09);border-color:#ef4444}
.cal-caution .cal-tag{background:#ef4444;color:#fff}
.cal-done{background:rgba(22,163,74,.09);border-color:var(--ok)}
.cal-done .cal-tag{background:var(--ok);color:#fff}
.cal-skip{background:rgba(148,163,184,.13);border-color:var(--skip)}
.cal-skip .cal-tag{background:var(--skip);color:#fff}
.cal-keep{background:rgba(161,98,7,.11);border-color:#a16207}
.cal-keep .cal-tag{background:#a16207;color:#fff}

.gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px;margin:12px 0 4px}
.gal.one{grid-template-columns:minmax(0,440px)}
.gal img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:8px;border:1px solid var(--line);
  background:var(--line);display:block;transition:transform .15s}
.gal a:hover img{transform:scale(1.02);border-color:var(--orange)}

.tips{margin-top:12px;border:1px solid var(--line);border-radius:10px;overflow:hidden}
.tips-h{background:rgba(250,104,49,.10);color:var(--orange-d);font-size:11px;font-weight:800;
  text-transform:uppercase;letter-spacing:.07em;padding:6px 12px}
.tip{padding:9px 12px;font-size:13.5px;border-top:1px solid var(--line)}
.tip:first-of-type{border-top:0}
.who{display:block;font-size:11px;font-weight:700;color:var(--mut);margin-bottom:2px}

body.hide-done .step.done{display:none}
body.prep-only .step:not(.prep){display:none}
body.prep-only .phase.noprep{display:none}
body.prep-only .lead,body.prep-only details.salvage:not(.prep-panel){display:none}
.prep-panel{border-color:#15803d}
.prep-panel > summary{color:#15803d}
.pcount{float:right;font-size:12px;font-weight:700;color:var(--mut);font-variant-numeric:tabular-nums}
.ptask{display:grid;grid-template-columns:34px 1fr;align-items:start;gap:4px;padding:9px 0;
  border-bottom:1px solid var(--line);cursor:pointer}
.ptask:last-child{border-bottom:0}
.ptask .box{width:20px;height:20px;margin-top:2px}
.ptask .box::after{left:6px;top:2px;width:5px;height:10px}
.ptask input{position:absolute;opacity:0;width:0;height:0}
.ptask:hover .box{border-color:var(--orange)}
.ptxt{font-size:13.5px;line-height:1.5}
.ptask input:checked ~ .ptxt{opacity:.45;text-decoration:line-through}
.ptxt .mut{color:var(--mut)}
footer{max-width:1500px;margin:0 auto;padding:0 18px 60px;color:var(--mut);font-size:13px}
</style>
</head>
<body>

<header class="top">
  <div class="topin">
    <div class="logo">CORE One <b>&rarr;</b> CORE One+ Gen&nbsp;2 <b>+</b> INDX</div>
    <div class="gprog">
      <div class="bar"><i id="gbar"></i></div>
      <span class="pct" id="gpct">0 / ${n}</span>
    </div>
    <button class="btn" id="prepMode">Prep mode</button>
    <button class="btn" id="toggleDone">Hide finished</button>
    <button class="btn" id="jump">Jump to next</button>
    <button class="btn" id="reset">Reset</button>
  </div>
</header>

<div class="wrap">
  <nav class="toc">
    <h4>Phases</h4>
    <ol>${tocHtml.join('')}</ol>
  </nav>

  <main>
    <div class="lead">
      <h1>CORE One \u2192 CORE One+ (Gen&nbsp;2) with INDX</h1>
      <p>The complete conversion, start to finish, in one linear list. A de-duplicated merge of the
      <b>Prusa CORE One INDX conversion</b> guide and the <b>CORE One+ (Gen 2)</b> upgrade guide, sequenced per
      <a href="${ART}" target="_blank" rel="noopener">Prusa\u2019s combined article</a> \u2014 no jumping between tabs,
      no duplicated steps, superseded steps marked as skippable.</p>
      <p><b>${n} steps</b> across ${PLAN.length} phases. Every tick is saved in your browser (localStorage), so you can close
      the page and come back. Each step links back to the original Prusa step \u2014 photos are loaded from help.prusa3d.com,
      so keep an internet connection.</p>
      <div class="keys">
        <span class="key"><b style="color:var(--orange-d)">INDX x.y</b> \u2013 step from the INDX conversion guide</span>
        <span class="key"><b style="color:#2563eb">GEN2 x.y</b> \u2013 step from the Gen 2 upgrade guide</span>
        <span class="key"><b style="color:#7c3aed">Combined article</b> \u2013 instruction that only exists in the merge article</span>
        <span class="key"><b style="color:#0e7490">reuses old parts</b> \u2013 step needs something salvaged from your printer</span>
        <span class="key"><b style="color:#a16207">keep parts</b> \u2013 disassembly step that produces something you need later</span>
      </div>
      <div class="tips" style="margin-top:16px">
        <div class="tips-h">What people said under the combined article</div>
        ${articleCommentsHtml}
      </div>
    </div>

    <details class="salvage prep-panel" id="prepPanel" open>
      <summary><b>Kit-free prep</b> — what you can do right now, before the boxes arrive
        <span class="pcount" id="pcount"></span></summary>
      <p class="intro" style="margin:12px 0 4px">
        <b>${prepStepCount} steps</b> of the build need nothing from the Plus / Gen&nbsp;2 / INDX kits — they are pure teardown,
        tool lists or reading. Hit <b>Prep mode</b> in the toolbar to hide everything else and work straight down them.
        Below that are ${PREP_TASKS.length} off-guide tasks worth doing while you wait.
      </p>
      <div class="cal cal-caution" style="margin:10px 0">
        <span class="cal-tag">Before you start</span>
        <div>Once the belts are off and both motors are loose, the <b>gantry is floppy and no longer square</b>. That is fine — it gets
        re-squared with the Gantry-aligner-tool in Phase 8 — but do not shove the X/Y carriage around, and do not stack anything on the frame.
        <br>${refs(PREP_BLOCKED)}</div>
      </div>
      <div class="sgroup"><h4>Off-guide prep tasks</h4>${prepTasksHtml}</div>
    </details>

    <details class="salvage" open>
      <summary><b>Salvaged-parts inventory</b> \u2014 everything you need that does <u>not</u> come in the Plus / Gen&nbsp;2 / INDX kits</summary>
      <p class="intro" style="margin:12px 0 4px">
        Collect all of this into labelled pots <b>before</b> you start Phase 1. Steps that consume a salvaged part carry a
        <span class="chip">from your printer</span> chip; disassembly steps that produce one carry a
        <span class="badge badge-keep">keep parts</span> badge with a note saying exactly where it is needed again.
        Quantities are what your build path actually consumes \u2014 not the full kit BOM.
      </p>
      ${refs(SALVAGE_INTRO)}
      ${salvageHtml}
    </details>
    ${sectionsHtml.join('\n')}
  </main>
</div>

<footer>
  Compiled from help.prusa3d.com guide data, guide/article comments and r/prusa3d threads.
  Unofficial \u2013 always cross-check against the linked original step if something looks wrong.
</footer>

<script>
(function(){
  var KEY = 'coreone-gen2-indx-progress-v3';
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch(e) { state = {}; }

  var boxes = Array.prototype.slice.call(document.querySelectorAll('input.tick'));
  var prepBoxes = Array.prototype.slice.call(document.querySelectorAll('input.tickp'));
  var total = boxes.length;

  function save(){ try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){} }

  function paintStep(cb){
    var card = cb.closest('.step');
    card.classList.toggle('done', cb.checked);
  }

  function refresh(){
    var done = 0;
    boxes.forEach(function(cb){ if (cb.checked) done++; });
    var pct = total ? (done/total*100) : 0;
    document.getElementById('gbar').style.width = pct + '%';
    document.getElementById('gpct').textContent = done + ' / ' + total + '  (' + Math.round(pct) + '%)';

    document.querySelectorAll('section.phase').forEach(function(sec){
      var ids = JSON.parse(sec.dataset.steps);
      var d = ids.filter(function(id){ return !!state[id]; }).length;
      var p = ids.length ? d/ids.length*100 : 0;
      var bar = sec.querySelector('[data-secbar]');
      if (bar) bar.style.width = p + '%';
      var lbl = sec.querySelector('[data-seccount]');
      if (lbl) lbl.textContent = d + ' / ' + ids.length;
      var toc = document.querySelector('[data-toc="' + sec.id + '"]');
      if (toc){ toc.textContent = d + '/' + ids.length; toc.classList.toggle('full', d === ids.length && ids.length > 0); }
    });
  }

  boxes.forEach(function(cb){
    cb.checked = !!state[cb.dataset.step];
    paintStep(cb);
    cb.addEventListener('change', function(){
      state[cb.dataset.step] = cb.checked;
      if (!cb.checked) delete state[cb.dataset.step];
      paintStep(cb);
      save(); refresh();
    });
  });

  function refreshPrep(){
    var d = prepBoxes.filter(function(cb){ return cb.checked; }).length;
    var s = boxes.filter(function(cb){ return cb.closest('.step').classList.contains('prep') && cb.checked; }).length;
    var st = document.querySelectorAll('.step.prep').length;
    document.getElementById('pcount').textContent = 'steps ' + s + '/' + st + '  \u00b7  tasks ' + d + '/' + prepBoxes.length;
  }
  prepBoxes.forEach(function(cb){
    cb.checked = !!state[cb.dataset.step];
    cb.addEventListener('change', function(){
      state[cb.dataset.step] = cb.checked;
      if (!cb.checked) delete state[cb.dataset.step];
      save(); refreshPrep();
    });
  });
  boxes.forEach(function(cb){ cb.addEventListener('change', refreshPrep); });
  refreshPrep();
  save(); refresh();

  document.getElementById('prepMode').addEventListener('click', function(){
    var on = document.body.classList.toggle('prep-only');
    this.classList.toggle('on', on);
    this.textContent = on ? 'Show everything' : 'Prep mode';
    if (on) document.getElementById('prepPanel').open = true;
    window.scrollTo({ top: 0 });
  });

  document.getElementById('toggleDone').addEventListener('click', function(){
    document.body.classList.toggle('hide-done');
    this.classList.toggle('on');
    this.textContent = document.body.classList.contains('hide-done') ? 'Show finished' : 'Hide finished';
  });

  document.getElementById('jump').addEventListener('click', function(){
    var next = boxes.filter(function(cb){ return !cb.checked; })[0];
    if (next) next.closest('.step').scrollIntoView({block:'center'});
  });

  document.getElementById('reset').addEventListener('click', function(){
    if (!confirm('Clear all ticks and start over?')) return;
    state = {}; localStorage.removeItem(KEY);
    boxes.forEach(function(cb){ cb.checked = false; paintStep(cb); });
    prepBoxes.forEach(function(cb){ cb.checked = false; });
    refresh(); refreshPrep();
  });
})();
</script>
</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('index.html written \u2013', n, 'steps,', PLAN.length, 'phases,', (html.length / 1024).toFixed(0) + ' KB');
