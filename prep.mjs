// Steps that need nothing from the Plus / Gen 2 / INDX kits \u2014 doable before the boxes arrive.
// Values are the reason shown on the badge tooltip.
const READ = 'Reading / preparation only';
const REMOVE = 'Removal only \u2014 no new parts involved';

export const PREP = {
  'c-overview': READ,
  'c-panels-early': READ,
  'c-xy-cables': 'Unplug only',
  'c-left-cover': REMOVE,
  'c-left-panel': REMOVE,
  'c-right-cover': REMOVE,
  'c-right-panel': REMOVE,
  'c-differences': READ,

  // INDX 1 \u2014 introduction (all reading)
  1096271: READ, 1096341: READ, 1096375: READ, 1096424: READ, 1096508: READ,
  1096560: READ, 1096586: READ, 1096636: READ, 1096688: READ, 1096748: READ,
  1149726: READ, 1096874: 'MMU3 removal \u2014 no kit parts', 1096814: READ, 1096924: READ,

  // INDX 2 \u2014 the entire preparation & disassembly chapter
  1096990: READ, 1097058: 'Firmware only', 1097128: 'Printer menu only', 1097182: 'Printer menu only',
  1097226: REMOVE, 1097288: REMOVE, 1097338: READ, 1097379: REMOVE, 1097433: REMOVE,
  1097459: REMOVE, 1097497: REMOVE, 1097565: REMOVE, 1097619: REMOVE, 1097647: REMOVE,
  1097717: REMOVE, 1097763: REMOVE, 1097825: REMOVE, 1097871: REMOVE, 1097907: REMOVE,
  1097959: REMOVE, 1098013: REMOVE, 1098049: REMOVE, 1098077: REMOVE, 1098123: REMOVE,
  1098169: REMOVE, 1098205: REMOVE, 1098251: REMOVE, 1098321: REMOVE, 1098367: REMOVE,
  1098411: REMOVE, 1098463: REMOVE, 1098507: REMOVE, 1098549: READ, 1098626: READ,
  1098644: 'Eat a gummy bear', 1098670: READ,

  // INDX 3 \u2014 heatbed removal and the later teardown steps
  1098695: READ, 1098739: 'Optional camera cable \u2014 uses your existing cable', 1098782: REMOVE,
  1098835: REMOVE, 1098905: REMOVE,
  1098949: REMOVE,
  1099677: REMOVE,
  1100218: REMOVE,

  // GEN 2 heatbed teardown
  1110931: REMOVE,

  // Belt / motor teardown
  1100576: 'Tool list',
  1100644: 'Loosening + removing your own screws',
  1100696: REMOVE,
  1149188: REMOVE,
  1149214: REMOVE,
  1149258: REMOVE,
  1113087: REMOVE,
  1113260: REMOVE,
};

export const PREP_TASKS = [
  ['Sort and label every salvaged fastener', `Use the inventory below. Separate pots for <b>M3x10</b> (the big one \u2014 you need ~9\u201312),
    M3x8rT, <b>M3x4rT vs M3x5rT</b> (do not mix, they look identical), M3x35, M3x6, M3x4bT, M3x30 tensioner screws.`],
  ['Guard the M3x10rT from the bed-cable-cover', `{{1099677}} yields a single <b>M3x10rT</b> screw that is the only thing holding the
    new cover at {{1099826}}, and <b>no kit contains a replacement</b>. Put it somewhere you cannot lose it.`],
  ['Guard the textile sleeve and the 6\u00d73.1\u00d78 mm spacer', `The sleeve comes off at {{1098835}} and the spacer is left loose on the
    Z-carriage at {{1098905}}. Both are needed again at {{1099715}} and neither is in any kit.`],
  ['Count your nylon rivets', `You need <b>32</b> back (11+11 panels, 5+5 covers) plus 4 more that come out later. If any snapped, order
    or print spares now \u2014 they are a common shortage.`],
  ['Bag the two old motor pulleys separately and label them "OLD"', `Mixing them up with the new <b>T21-1.5GT</b> pulleys is one of the
    most reported failures of this upgrade. Do it the moment they come off at {{1113087}} / {{1113260}}.`],
  ['Strip the two belt-tensioner idlers off the old belts', `The idlers are reused at {{1113350}}; the belts are scrap.
    Take them off before the belts end up in the bin.`],
  ['Box up the complete Nextruder', `Nothing from it is reused except the print fan. Keep it intact in case you ever want to revert
    to a plain CORE One+ \u2014 but get it off the bench.`],
  ['Cut 2 \u00d7 300 mm pieces of filament', `Needed as measuring gauges at {{1103271}}\u2013{{1103401}}. PETG recommended. Costs nothing to do now.`],
  ['Find an empty Prusament box', `Prusa recommends it as heatbed protection while you wrestle the motors ({{1113087}}). A folded towel works too.`],
  ['Get a ball-end 2.5 mm Allen key', `Community consensus: the PTFE-holder screw at {{1102345}} is miserable with a straight key and
    trivial with a ball-end one.`],
  ['Tool check', `2.0 mm + 2.5 mm Allen keys, T10 Torx, needle-nose pliers / flush cutters, the Universal wrench.
    Also grab a <b>brass brush</b> \u2014 you will want it during tool-offset calibration.`],
  ['Download the latest INDX firmware to a USB stick', `{{1109603}} needs it. Doing it now avoids a download stall at the finish line.
    Check <i>Settings \u2192 Hardware</i> afterwards for the Gen 2 / 1.5GT belt option.`],
  ['Clear the bench', `Later you have to <b>tilt the printer on its side</b> ({{1106028}}) and fit eight puck holders. Make room for that now.`],
  ['Optional: drill the right side panel for the expanded bucket', `Bpendragon\u2019s tip from the article comments \u2014 do it while the panel
    is off and flat on your bench, which will never be this convenient again.`],
  ['Optional: vacuum the chamber and wipe the frame', `The printer will never be this open again. Do <b>not</b> lubricate the linear rail.`],
];

export const PREP_BLOCKED = `
<b>What you cannot do without the kits:</b> everything from {{1113097}} onward (new pulleys, new belts), all INDX sub-assemblies,
the new heatbed expansion joints ({{1110942}}+), the gantry aligner tool, and the belt-tensioner lubrication
(the Prusa lubricant is in the INDX <i>Fasteners 2/2</i> bag \u2014 unless you still have the sachet from your original build).`;
