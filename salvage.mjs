// "Keep this part" callouts for the disassembly steps that appear in your path.
// Keyed by original Prusa step id.
export const KEEP = {
  // GEN 2 heatbed
  1110931: `<b>Keep:</b> all 8 old expansion joints + the 8 <b>M3x4r</b> screws.
    <br>The Gen 2 kit supplies new <i>Expansion joint screws</i>, so the M3x4r are spares.
    <br><b>Good news:</b> the official Gen 2 guide reuses one old joint for its nozzle wiper \u2014 the <b>INDX nozzle cleaner
    ({{1104705}}) uses all-new parts</b>, so you do <i>not</i> need one. Keep one anyway as a spare.`,
  // INDX chapter 2 \u2014 the big teardown
  1097497: `<b>Keep the door panel assembly and its 4\u00d7 M3x5rT screws</b> \u2014 both needed at {{1109291}}.
    Do not mix the M3x5rT with the M3x4rT from the electronics covers.`,
  1098169: `<b>Keep the 2\u00d7 M3x18</b> from the heatsink fan. The M5-4 fitting and the bowden-bend are <b>not</b> reused on INDX.`,
  1098205: `The Nextruder assembly itself is <b>not reused</b> \u2014 shelve it intact in case you ever revert to a plain CORE One+.
    <br><b>Keep the 3\u00d7 M3x10.</b>`,
  1098251: `<b>Keep the print fan</b> \u2014 it is the only Nextruder-area part that is reused ({{1101500}}).
    <br>Also keep the <b>2\u00d7 M3x6T</b> from the head cable cover ({{1101234}}) and the <b>2\u00d7 M3x10</b>.`,
  1098549: `Prusa\u2019s official keep-list. Anything not on it can be set aside \u2014 but <b>keep every screw</b>,
    the later chapters assume you have them. See the salvaged-parts inventory at the top of this page.`,
  // INDX Z-axis
  1098835: `<b>Keep the textile sleeve</b> ({{1099715}}), the <b>8\u00d7 M3x4bT</b> perimeter screws ({{1099791}}) and the centre screw.
    <br>The centre M3x12bT becomes a spare \u2014 Gen 2 replaces it with a longer <b>M3x14</b>.`,
  1098905: `<b>Keep the loose spacer</b> left on the Z-carriage \u2014 it is the 6\u00d73.1\u00d78 mm one needed at {{1099715}}.
    Do not confuse it with the new 10 mm Gen 2 spacer.`,
  1098949: `<b>Leave the two M3x18 screws in the trapezoidal nut.</b> They align the new spacer at {{1099077}}.
    The old CORE-One-bed-spacer-rear itself is scrap.`,
  1099677: `<b>Keep the M3x10rT screw</b> \u2014 it is the <i>only</i> screw that holds the new Bed-cable-cover-bottom at
    {{1099826}}. There is no replacement in any kit.`,
  1100218: `<b>Keep all four M3x8rT screws.</b> They go straight back on at {{1100254}} / {{1100386}}.`,
  // INDX belts release
  1100644: `<b>Keep both M3x30 belt-tensioning screws</b> \u2014 you lubricate them in Phase 9 and refit them at {{1101147}}.
    <br>Also make sure the <b>M3nS nut</b> stays inside each Belt-tensioner-pulley.`,
  1100696: `The <b>Nextruder holder itself is scrap</b> (INDX uses a different plate).
    <br><b>Keep the four M3x10 screws</b> from it \u2014 plain M3x10 screws are consumed 9\u00d7 in later phases and the kit does not supply them.`,
  // GEN 2 belts
  1149188: `The <b>old belts are scrap</b>. <b>Keep both belt-tensioner idler assemblies</b> that are still threaded onto them \u2014
    they are reused at {{1113350}} / {{1113372}} / {{1113415}}.`,
  1149214: `<b>Keep the four M3x35 screws + the one M3x6 screw.</b> They are refitted at {{1113350}} / {{1113341}}.`,
  1149258: `<b>Keep the four M3x35 screws + the one M3x6 screw.</b> They are refitted at {{1113217}} / {{1113237}}.
    <br>Leave the <b>Main-cable-clip</b> exactly where it sits on the cable bundle.`,
  1113087: `The <b>old pulley is scrap</b> \u2014 bag it separately so you cannot mix it up with the new T21-1.5GT one.
    <br><b>Keep the M3x10</b> that held the Bowden-guide and <b>keep the M3nS nut</b> in the motor mount ({{1113217}} expects both).`,
  1113260: `The <b>old pulley is scrap</b> \u2014 same as the right motor, keep it well away from the new one.`,
  // INDX chapter 5
  1105424: `<b>Keep the 2 nylon rivets and both M3x4rT screws.</b> The M3x4rT screws are part of the 8\u00d7 batch that
    goes back into the xBuddy box and rear cover ({{1105054}} / {{1105202}} / {{1105238}}).`,
  1105734: `<b>Keep both M3x4rT screws</b> \u2014 same batch as the left side.`,
  1106645: `<b>Keep both nylon rivets.</b>`,
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
    group: 'Comes off the printer in Phases 1\u20137 \u2014 do not lose these',
    warn: true,
    rows: [
      ['Heatbed assembly', '1\u00d7', '{{1098905}}', 'Phase 6 + {{1099880}}', 'The Gen 2 expansion joints are fitted to it while it is out.'],
      ['Textile sleeve 520 \u00d7 8 mm', '1\u00d7', '{{1098835}}', '{{1099715}} / {{1099994}}', 'Pulled off the heatbed cable bundle. Not in any kit.'],
      ['M3x4bT screw', '8\u00d7', '{{1098835}}', '{{1099791}} / {{1099926}}', 'The eight heatbed perimeter screws. Bag calls them <b>bT</b>, guide sometimes <b>cT</b> \u2014 same screw.'],
      ['M3x12bT screw', '1\u00d7', '{{1098835}}', '\u2014 superseded', '<b>Not used</b> with Gen 2: the centre screw is replaced by the new <b>M3x14bT</b> from the Gen 2 kit. Keep as spare.'],
      ['Heatbed spacer 6 \u00d7 3.1 \u00d7 8 mm', '1\u00d7', '{{1098905}} (loose on the Z-carriage)', '{{1099715}}', 'Do <b>not</b> confuse with the new <b>10 mm</b> Gen 2 spacer that goes on the centre hole ({{1110975}}).'],
      ['M3x10rT screw', '1\u00d7', '{{1099677}}', '{{1099826}}', '<b>Critical and easy to lose</b> \u2014 the only screw holding the new Bed-cable-cover-bottom. No kit replacement.'],
      ['Steel side panel, left + right', '2\u00d7', 'Phase 4 (left) + Phase 9 (right)', 'Phase 16 (left) + {{1136729}} (right)', 'Right panel also carries the side handle + side FS.'],
      ['Top see-through side cover, left + right', '2\u00d7', 'Phase 4 (left) + Phase 9 (right)', 'Phase 12', 'Left one gets the filament sensor \u2014 leave the top-middle rivet hole empty.'],
      ['Nylon rivets', '32\u00d7', '{{1097379}} + Phases 4 and 9 (11 + 11 panels, 5 + 5 covers)', 'Phases 12, 16, 17', 'Plus 4 more from {{1105424}} / {{1106645}}. Count them now.'],
    ],
  },
  {
    group: 'Fasteners the guides expect you to have salvaged',
    rows: [
      ['M3x10 screw (plain, hex)', '\u2248 9\u201312\u00d7', 'old print head, PTFE holders, Nextruder holder, Bowden-guide, top cover', '{{1099330}}, {{1099715}}, {{1101622}}, {{1102293}}, {{1103271}}, {{1103578}}, {{1108070}}, {{1113217}}', '<b>The most-reused fastener in the whole build.</b> The kits supply almost none. Pool them all in one pot.'],
      ['M3x8rT screw', '4\u00d7 + 2\u00d7', '{{1100218}} (bed-stop) / {{1098411}} (side handle)', '{{1100254}} and {{1104095}}', ''],
      ['M3x4rT screw', '8\u00d7', 'electronics covers + {{1105424}} / {{1105734}}', '{{1105054}} / {{1105202}} / {{1105238}}', '<b>Do not mix with M3x5rT</b> \u2014 those are the door screws.'],
      ['M3x5rT screw', '4\u00d7', '{{1097497}} (door panel)', '{{1109291}}', ''],
      ['M3x4 screw + M3x4rT screw', '2\u00d7 + 2\u00d7', 'chapter 2 disassembly', '{{1108665}} / {{1108797}} (tooldock)', ''],
      ['M3x6T screw', '2\u00d7', '{{1098251}} (old head cable cover)', '{{1101234}}', 'Guide callout \u201cM3x16T\u201d there is a typo \u2014 see the community note on that step.'],
      ['M3x30 belt-tensioning screw', '2\u00d7', '{{1100644}}', 'Phase 9 (lube) + {{1101147}}', 'Lubricate before refitting \u2014 galling is a known first-wave issue.'],
      ['M3x35 screw', '4\u00d7 + 4\u00d7', '{{1149214}} (left motor) + {{1149258}} (right motor)', '{{1113217}} and {{1113350}}', 'The guide originally said M3x30 \u2014 they are <b>M3x35</b>.'],
      ['M3x6 screw', '1\u00d7 + 1\u00d7', '{{1149214}} + {{1149258}} (motor holders)', '{{1113217}} and {{1113350}}', ''],
      ['M3nS nut', '1\u00d7', 'right motor mount', '{{1113217}}', 'Usually stays in the part \u2014 check it did not drop out.'],
      ['M3x18 screw (in trapezoidal nut)', '2\u00d7', 'left in place at {{1098949}}', '{{1099077}}', 'Do <b>not</b> remove these from the nut.'],
      ['Cable tie (reusable)', '2\u00d7', 'chapter 2 cable management', '{{1101687}}', ''],
    ],
  },
  {
    group: 'Assemblies and larger parts',
    rows: [
      ['Belt-tensioner idler assembly', '2\u00d7', '{{1149188}} (still on the old belts)', '{{1113350}} / {{1113372}} / {{1113415}}', 'Slide them off the scrap belts before you bin the belts.'],
      ['Right side cover (steel, with handle holes)', '1\u00d7', 'Phase 9', '{{1104095}} \u2192 {{1104139}}', ''],
      ['Door panel assembly', '1\u00d7', '{{1097497}}', '{{1109291}} / {{1109337}}', 'Gets the new <i>Top door seal</i> from the kit.'],
      ['Print sheet', '1\u00d7', 'your printer', '{{1109561}}', ''],
      ['Old expansion joint', '1\u00d7 (optional)', '{{1110931}}', 'not needed', 'Only the <i>Gen 2-only</i> path reuses one for its wiper. The INDX nozzle cleaner is all-new. Keep one as a spare.'],
    ],
  },
  {
    group: 'Off the Nextruder / old print head \u2014 keep the screws, shelve the rest',
    rows: [
      ['Print fan (blower)', '1\u00d7', '{{1098251}}', '{{1101500}} / {{1101534}}', '<b>The only Nextruder-area part you actually reuse.</b> New M3x25 comes from Fasteners 1/2.'],
      ['M3x10 screw', '3\u00d7', '{{1098205}} (Nextruder \u2192 X-axis)', 'reuse pool', 'Feeds the big M3x10 pool.'],
      ['M3x10 screw', '2\u00d7 + 2\u00d7', '{{1098251}} (head cover) + {{1098367}} (fan shroud)', 'reuse pool', ''],
      ['M3x8rT screw', '1\u00d7', '{{1098321}} (LoveBoard)', 'reuse pool', ''],
      ['M3x4rT screw', '2\u00d7', '{{1098367}} (Cable-clip)', 'reuse pool', ''],
      ['M3x18 screw', '2\u00d7', '{{1098169}} (heatsink fan)', 'reuse pool', 'Different M3x18 from the two left in the trapezoidal nut.'],
      ['M3x6 screw', '2\u00d7', '{{1098077}} (Nextruder right cover)', 'reuse pool', ''],
      ['Nextruder assembly (hotend, nozzle, gears, idler)', '1\u00d7', '{{1098205}}', '<b>not needed</b>', 'Shelve intact. Needed only if you ever revert to a plain CORE One+.'],
      ['Heatsink / nozzle holder + heatsink fan', '1\u00d7', '{{1098169}} / {{1098205}}', '<b>not needed</b>', 'INDX Nozzle tools have their own heatsinks; the toolhead has its own fans.'],
      ['LoveBoard + Nextruder main cable', '1\u00d7', '{{1098321}}', '<b>not needed</b>', 'Replaced by the INDX head cable + toolhead electronics.'],
      ['Loveboard-holder, old Fan-shroud, Cable-clip, print-head covers', '\u2014', '{{1098321}} / {{1098367}}', '<b>not needed</b>', 'INDX-C1-Fan-shroud is a new part from the Toolhead bag.'],
      ['M5-4 fitting + bowden-bend + PTFE', '1\u00d7', '{{1098123}} / {{1098169}}', '<b>not needed</b>', 'INDX feeds through the side filament sensors and 4\u00d7/8\u00d7 PTFE tubes instead.'],
    ],
  },
  {
    group: 'Definitely scrap \u2014 bag separately so you cannot mix them up',
    rows: [
      ['Old motor pulleys', '2\u00d7', '{{1113087}} + {{1113260}}', 'scrap', 'Look very similar to the new <b>T21-1.5GT</b> pulleys. Mixing these up is a reported failure mode.'],
      ['Old belts', '2\u00d7', '{{1149188}}', 'scrap', 'Strip the idlers off first.'],
      ['Nextruder holder', '1\u00d7', '{{1100696}}', 'scrap', 'INDX uses the Head-mounting-plate instead. Keep its 4\u00d7 M3x10.'],
      ['Bowden-guide', '1\u00d7', '{{1113247}} (skipped)', 'scrap', 'Not used on INDX. Remove it from the printer once detached.'],
      ['Gantry-aligner-tool', '2\u00d7', '{{1100946}}', 'scrap', 'Printed jig, single use.'],
      ['Old Bed-stop-rear / Bed-cable-cover-bottom / bed spacers', '\u2014', '{{1099677}} / {{1098949}} / {{1100218}}', 'scrap', 'Replaced by INDX parts. Keep their screws.'],
    ],
  },
];
