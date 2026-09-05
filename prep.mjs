// Steps that need nothing from the Plus / Gen 2 / INDX kits \u2014 doable before the boxes arrive.
// Values are the reason shown on the badge tooltip.
export const PREP = {
  'c-state': 'Reading / verification only',
  'c-xy-cables': 'Unplug only',
  'c-panels-done': 'Already done',
  'c-differences': 'Reading only',
  1098949: 'Pure removal \u2014 the new INDX-bed-spacer-rear is not touched yet',
  1110931: 'Pure removal \u2014 the new joints come out of the box later',
  1100218: 'Pure removal',
  1100576: 'Tool list',
  1100644: 'Loosening + removing your own screws',
  1100696: 'Removal only \u2014 old Nextruder holder is scrap',
  1149188: 'Removal only',
  1149214: 'Removal only',
  1149258: 'Removal only',
  1113087: 'Removal only \u2014 old pulley comes off',
  1113260: 'Removal only \u2014 old pulley comes off (out of guide order, but independent)',
};

export const PREP_TASKS = [
  ['Sort and label every salvaged fastener', `Use the inventory above. Separate pots for <b>M3x10</b> (the big one \u2014 you need ~9\u201312),
    M3x8rT, <b>M3x4rT vs M3x5rT</b> (do not mix, they look identical), M3x35, M3x6, M3x4bT, M3x30 tensioner screws.`],
  ['Hunt down the M3x10rT from the bed-cable-cover', `You already removed the Bed-cable-cover-bottom (INDX 3.21). Its single
    <b>M3x10rT</b> screw is the only thing that holds the new cover in INDX 3.23 and <b>no kit contains a replacement</b>. Find it now.`],
  ['Find the 6\u00d73.1\u00d78 mm heatbed spacer and the textile sleeve', `Both came off during the steps you already did and both are
    needed again (INDX 3.22). The sleeve is not in any kit.`],
  ['Count your nylon rivets', `You need <b>32</b> back (11+11 panels, 5+5 covers) plus 4 more that come out later. If any snapped, order
    or print spares now \u2014 they are a common shortage.`],
  ['Bag the two old motor pulleys separately and label them "OLD"', `Mixing them up with the new <b>T21-1.5GT</b> pulleys is one of the
    most reported failures of this upgrade. Do it the moment they come off.`],
  ['Strip the two belt-tensioner idlers off the old belts', `The idlers are reused (GEN2 3.29/3.32/3.36); the belts are scrap.
    Take them off before the belts end up in the bin.`],
  ['Box up the complete Nextruder', `Nothing from it is reused except the print fan. Keep it intact in case you ever want to revert
    to a plain CORE One+ \u2014 but get it off the bench.`],
  ['Cut 2 \u00d7 300 mm pieces of filament', `Needed as measuring gauges in INDX 4.58\u20134.60. PETG recommended. Do it now, it costs nothing.`],
  ['Find an empty Prusament box', `Prusa recommends it as heatbed protection while you wrestle the motors (GEN2 3.7). A folded towel works too.`],
  ['Get a ball-end 2.5 mm Allen key', `Community consensus: the PTFE-holder screw in INDX 4.39 is miserable with a straight key and
    trivial with a ball-end one. Cheap, and you have the weekend to find one.`],
  ['Tool check', `2.0 mm + 2.5 mm Allen keys, T10 Torx, needle-nose pliers / flush cutters, the Universal wrench.
    Also grab a <b>brass brush</b> \u2014 you will want it during tool-offset calibration.`],
  ['Download the latest INDX firmware to a USB stick', `INDX 6.5 needs it. Doing it now avoids a download stall at the finish line.
    Check <i>Settings \u2192 Hardware</i> afterwards for the Gen 2 / 1.5GT belt option.`],
  ['Clear the bench', `Later you have to <b>tilt the printer on its side</b> (INDX 5.46) and fit eight puck holders. Make room for that now.`],
  ['Optional: drill the right side panel for the expanded bucket', `Bpendragon\u2019s tip from the article comments \u2014 the panel is off and
    flat on your bench right now, which will never be this convenient again.`],
  ['Optional: vacuum the chamber and wipe the frame', `The printer will never be this open again. Do <b>not</b> lubricate the linear rail.`],
];

export const PREP_BLOCKED = `
<b>What you cannot do yet:</b> everything from GEN2 3.8 onward (new pulleys, new belts), all INDX sub-assemblies,
the heatbed expansion joints (GEN2 4.5+), the gantry aligner tool, and the belt-tensioner lubrication
(the Prusa lubricant is in the INDX <i>Fasteners 2/2</i> bag \u2014 unless you still have the sachet from your original build).`;
