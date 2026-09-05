// "Keep this part" callouts for the disassembly steps that appear in your path.
// Keyed by original Prusa step id.
export const KEEP = {
  // GEN 2 heatbed
  1110931: `<b>Keep:</b> all 8 old expansion joints + the 8 <b>M3x4r</b> screws.
    <br>The Gen 2 kit supplies new <i>Expansion joint screws</i>, so the M3x4r are spares.
    <br><b>Good news:</b> the official Gen 2 guide reuses one old joint for its nozzle wiper \u2014 the <b>INDX nozzle cleaner
    (Phase 11) uses all-new parts</b>, so you do <i>not</i> need one. Keep one anyway as a spare.`,
  // INDX Z-axis
  1100218: `<b>Keep all four M3x8rT screws.</b> They go straight back on in step <b>INDX 3.35 / 3.38</b>, two steps below.`,
  // INDX belts release
  1100644: `<b>Keep both M3x30 belt-tensioning screws</b> \u2014 you lubricate them in Phase 6 and refit them in <b>INDX 4.14</b>.
    <br>Also make sure the <b>M3nS nut</b> stays inside each Belt-tensioner-pulley.`,
  1100696: `The <b>Nextruder holder itself is scrap</b> (INDX uses a different plate).
    <br><b>Keep the four M3x10 screws</b> from it \u2014 plain M3x10 screws are consumed 9\u00d7 in later phases and the kit does not supply them.`,
  // GEN 2 belts
  1149188: `The <b>old belts are scrap</b>. <b>Keep both belt-tensioner idler assemblies</b> that are still threaded onto them \u2014
    they are reused in <b>GEN2 3.29 / 3.32 / 3.36</b> later in this same phase.`,
  1149214: `<b>Keep the four M3x35 screws + the one M3x6 screw.</b> They are refitted in <b>GEN2 3.29 / 3.30</b> (left motor, later in this phase).`,
  1149258: `<b>Keep the four M3x35 screws + the one M3x6 screw.</b> They are refitted in <b>GEN2 3.16 / 3.17</b> (right motor, a few steps below).
    <br>Leave the <b>Main-cable-clip</b> exactly where it sits on the cable bundle.`,
  1113087: `The <b>old pulley is scrap</b> \u2014 bag it separately so you cannot mix it up with the new T21-1.5GT one.
    <br><b>Keep the M3x10</b> that held the Bowden-guide and <b>keep the M3nS nut</b> in the motor mount (GEN2 3.16 expects both).`,
  1113260: `The <b>old pulley is scrap</b> \u2014 same as the right motor, keep it well away from the new one.`,
  // INDX chapter 5
  1105424: `<b>Keep the 2 nylon rivets and both M3x4rT screws.</b> The M3x4rT screws are part of the 8\u00d7 batch that
    goes back into the xBuddy box and rear cover (<b>INDX 5.18 / 5.21 / 5.22</b>).`,
  1105734: `<b>Keep both M3x4rT screws</b> \u2014 same batch as the left side.`,
  1106645: `<b>Keep both nylon rivets.</b>`,
  1104211: `<b>Keep the right side cover and all 11 nylon rivets</b> \u2014 the cover is needed immediately in <b>INDX 5.3</b>
    (the nozzle-wiper/handle assembly mounts onto it) and the rivets go back in <b>INDX 5.24</b>.`,
  1099677: `<b>Keep the M3x10rT screw</b> \u2014 it is the <i>only</i> screw that holds the new Bed-cable-cover-bottom in
    <b>INDX 3.23</b>, two steps below. There is no replacement in any kit.`,
};

// Up-front inventory: parts that must come off your own printer.

export const SALVAGE_INTRO = `
<div class="cal cal-note" style="margin:14px 0 0">
  <span class="cal-tag">Official list</span>
  <div>Prusa\u2019s own <b>\u201cParts recap I. / II.\u201d</b> at the end of INDX chapter 2 names <b>only six</b> things to keep:
  <b>sheet metal back cover, xBuddy box cover, print fan, print sheet, 2\u00d7 cable tie, door panel assembly</b>
  \u2014 plus \u201cwe recommend keeping <b>all removed screws</b>\u201d. Everything else is explicitly
  \u201ccan be set aside\u201d. The tables below expand that into what your specific path actually consumes.</div>
</div>
<div class="cal cal-caution" style="margin:10px 0 0">
  <span class="cal-tag">Nextruder</span>
  <div><b>Nothing from the Nextruder is reused except the print fan (blower).</b> No nozzle, no nozzle holder / heatsink,
  no heatsink fan, no LoveBoard, no hotend, no fan shroud, no M5-4 fitting. The INDX toolhead + 8 INDX Nozzle tools
  replace all of it and ship complete in their own boxes. Verified against every step of INDX chapters 3\u20136.
  <br><b>Do not bin it though</b> \u2014 the complete Nextruder is what you would need to revert to a plain CORE One+,
  and the M3x10 / M3x18 / M3x6 screws that come off it feed straight into the reuse pool below.
  <br><i>Why it looks different in the Gen 2 guide:</i> the Gen&nbsp;2-only path <i>does</i> reinstall the Nextruder
  (GEN2 3.39\u20133.64) \u2014 but your path stops at GEN2 3.38, so none of those steps apply.</div>
</div>`;

// [part, qty, where it comes off, where it is needed again (step refs), note]
export const SALVAGE = [
  {
    group: 'Already off the printer \u2014 make sure you still have these',
    warn: true,
    rows: [
      ['Heatbed assembly', '1\u00d7', 'INDX 3.5 (done)', 'Phase 3 + INDX 3.26', 'Obvious, but the Gen 2 expansion joints are fitted to it in Phase 3.'],
      ['Textile sleeve 520 \u00d7 8 mm', '1\u00d7', 'INDX 3.4 (done)', 'INDX 3.22 / 3.28', 'Pulled off the heatbed cable bundle. Not in any kit.'],
      ['M3x4bT screw', '8\u00d7', 'INDX 3.4 (done)', 'INDX 3.25 / 3.27', 'The eight heatbed perimeter screws. Bag calls them <b>bT</b>, guide sometimes <b>cT</b> \u2014 same screw.'],
      ['M3x12bT screw', '1\u00d7', 'INDX 3.4 (done)', '\u2014 superseded', '<b>Not used</b> with Gen 2: the centre screw is replaced by the new <b>M3x14bT</b> from the Gen 2 kit. Keep as spare.'],
      ['Heatbed spacer 6 \u00d7 3.1 \u00d7 8 mm', '1\u00d7', 'INDX 3.5 (done, loose on the Z-carriage)', 'INDX 3.22', 'Do <b>not</b> confuse with the new <b>10 mm</b> Gen 2 spacer that goes on the centre hole (GEN2 4.8).'],
      ['M3x10rT screw', '1\u00d7', 'INDX 3.21 (done)', 'INDX 3.23', '<b>Critical and easy to lose</b> \u2014 the only screw holding the new Bed-cable-cover-bottom. No kit replacement.'],
      ['M3x10 screw', '2\u00d7', 'INDX 3.21 area / old bed cable cover', 'INDX 3.22 / 3.27', 'Part of the general M3x10 pool below.'],
      ['Steel side panel, left + right', '2\u00d7', 'done early', 'Phase 13 (left) + INDX 5.24 (right)', 'Right panel also carries the side handle + side FS.'],
      ['Top see-through side cover, left + right', '2\u00d7', 'done early', 'Phase 9', 'Left one gets the filament sensor \u2014 leave the top-middle rivet hole empty.'],
      ['Nylon rivets', '32\u00d7', 'done early (11 + 11 panels, 5 + 5 covers)', 'Phases 9, 13, 14', 'Plus 4 more from INDX 5.27 / 5.35. These are single-use-ish \u2014 count them now.'],
    ],
  },
  {
    group: 'Fasteners the guides expect you to have salvaged',
    rows: [
      ['M3x10 screw (plain, hex)', '\u2248 9\u201312\u00d7', 'old print head, PTFE holders, Nextruder holder, Bowden-guide, top cover', 'INDX 3.15, 3.22, 4.25, 4.39, 4.58, 4.63, 5.74 \u00b7 GEN2 3.16', '<b>The most-reused fastener in the whole build.</b> The kits supply almost none. Pool them all in one pot.'],
      ['M3x8rT screw', '4\u00d7 + 2\u00d7', 'INDX 3.34 (bed-stop) / old side handle', 'INDX 3.35 / 3.38 and INDX 5.3', ''],
      ['M3x4rT screw', '8\u00d7', 'electronics covers + INDX 5.27 / 5.40 side panel corners', 'INDX 5.18 / 5.21 / 5.22', '<b>Do not mix with M3x5rT</b> \u2014 those are the door screws.'],
      ['M3x5rT screw', '4\u00d7', 'door panel (chapter 2)', 'INDX 5.99', ''],
      ['M3x4 screw', '2\u00d7', 'chapter 2 disassembly', 'INDX 5.86 / 5.88', ''],
      ['M3x4rT screw', '2\u00d7', 'chapter 2 disassembly', 'INDX 5.86 / 5.88 (tooldock)', ''],
      ['M3x6T screw', '2\u00d7', 'old head cable cover', 'INDX 4.16', 'Guide callout \u201cM3x16T\u201d there is a typo \u2014 see the community note on that step.'],
      ['M3x30 belt-tensioning screw', '2\u00d7', 'INDX 4.2', 'Phase 6 (lube) + INDX 4.14', 'Lubricate before refitting \u2014 galling is a known first-wave issue.'],
      ['M3x35 screw', '4\u00d7 + 4\u00d7', 'GEN2 3.5 (left motor) + 3.6 (right motor)', 'GEN2 3.16 / 3.17 and 3.29 / 3.30', 'The guide originally said M3x30 \u2014 they are <b>M3x35</b>.'],
      ['M3x6 screw', '1\u00d7 + 1\u00d7', 'GEN2 3.5 + 3.6 (motor holders)', 'GEN2 3.16 / 3.17 and 3.29 / 3.30', ''],
      ['M3nS nut', '1\u00d7', 'right motor mount', 'GEN2 3.16', 'Usually stays in the part \u2014 check it did not drop out.'],
      ['M3x18 screw (in trapezoidal nut)', '2\u00d7', 'left in place from the old Bed-spacer-rear', 'INDX 3.14', 'Do <b>not</b> remove these from the nut.'],
      ['Cable tie (reusable)', '2\u00d7', 'chapter 2 cable management', 'INDX 4.26', ''],
    ],
  },
  {
    group: 'Assemblies and larger parts',
    rows: [
      ['Belt-tensioner idler assembly', '2\u00d7', 'GEN2 3.4 (still on the old belts)', 'GEN2 3.29 / 3.32 / 3.36', 'Slide them off the scrap belts before you bin the belts.'],
      ['Right side cover (steel, with handle holes)', '1\u00d7', 'INDX 5.2 (done)', 'INDX 5.3 \u2192 5.4', ''],
      ['Door panel assembly', '1\u00d7', 'chapter 2', 'INDX 5.98 / 5.99', 'Gets the new <i>Top door seal</i> from the kit.'],
      ['Print sheet', '1\u00d7', 'your printer', 'INDX 6.4', ''],
      ['Old expansion joint', '1\u00d7 (optional)', 'GEN2 4.4', 'not needed', 'Only the <i>Gen 2-only</i> path reuses one for its wiper. The INDX nozzle cleaner is all-new. Keep one as a spare.'],
    ],
  },
  {
    group: 'Off the Nextruder / old print head \u2014 keep the screws, shelve the rest',
    rows: [
      ['Print fan (blower)', '1\u00d7', 'INDX 2.26', 'INDX 4.22 / 4.23', '<b>The only Nextruder-area part you actually reuse.</b> New M3x25 comes from Fasteners 1/2.'],
      ['M3x10 screw', '3\u00d7', 'INDX 2.25 (Nextruder \u2192 X-axis)', 'reuse pool', 'Feeds the big M3x10 pool.'],
      ['M3x10 screw', '2\u00d7 + 2\u00d7', 'INDX 2.26 (head cover) + 2.28 (fan shroud)', 'reuse pool', ''],
      ['M3x8rT screw', '1\u00d7', 'INDX 2.27 (LoveBoard)', 'reuse pool', ''],
      ['M3x4rT screw', '2\u00d7', 'INDX 2.28 (Cable-clip)', 'reuse pool', ''],
      ['M3x18 screw', '2\u00d7', 'INDX 2.24 (heatsink fan)', 'reuse pool', 'Different M3x18 from the two left in the trapezoidal nut.'],
      ['M3x6 screw', '2\u00d7', 'INDX 2.22 (Nextruder right cover)', 'reuse pool', ''],
      ['Nextruder assembly (hotend, nozzle, gears, idler)', '1\u00d7', 'INDX 2.25', '<b>not needed</b>', 'Shelve intact. Needed only if you ever revert to a plain CORE One+.'],
      ['Heatsink / nozzle holder + heatsink fan', '1\u00d7', 'INDX 2.24 / 2.25', '<b>not needed</b>', 'INDX Nozzle tools have their own heatsinks; the toolhead has its own fans.'],
      ['LoveBoard + Nextruder main cable', '1\u00d7', 'INDX 2.27', '<b>not needed</b>', 'Replaced by the INDX head cable + toolhead electronics.'],
      ['Loveboard-holder, old Fan-shroud, Cable-clip, print-head covers', '\u2014', 'INDX 2.27 / 2.28', '<b>not needed</b>', 'INDX-C1-Fan-shroud is a new part from the Toolhead bag.'],
      ['M5-4 fitting + bowden-bend + PTFE', '1\u00d7', 'INDX 2.23 / 2.24', '<b>not needed</b>', 'INDX feeds through the side filament sensors and 4\u00d7/8\u00d7 PTFE tubes instead.'],
    ],
  },
  {
    group: 'Definitely scrap \u2014 bag separately so you cannot mix them up',
    rows: [
      ['Old motor pulleys', '2\u00d7', 'GEN2 3.7 + 3.19', 'scrap', 'Look very similar to the new <b>T21-1.5GT</b> pulleys. Mixing these up is a reported failure mode.'],
      ['Old belts', '2\u00d7', 'GEN2 3.4', 'scrap', 'Strip the idlers off first.'],
      ['Nextruder holder', '1\u00d7', 'INDX 4.3', 'scrap', 'INDX uses the Head-mounting-plate instead. Keep its 4\u00d7 M3x10.'],
      ['Bowden-guide', '1\u00d7', 'GEN2 3.18 (skipped)', 'scrap', 'Not used on INDX. Remove it from the printer once detached.'],
      ['Gantry-aligner-tool', '2\u00d7', 'INDX 4.9', 'scrap', 'Printed jig, single use.'],
      ['Old Bed-stop-rear / Bed-cable-cover-bottom / bed spacers', '\u2014', 'INDX 3.21 / 3.34', 'scrap', 'Replaced by INDX parts. Keep their screws.'],
    ],
  },
];
