// Community notes gathered from the Prusa guide step comments, the "Assembling the
// Prusa INDX Core One with the Gen 2 upgrade" article comments, and r/prusa3d.
// Keyed by the original Prusa step id.

export const TIPS = {
  // ---- INDX chapter 3 (Z-axis) ----
  1099399: [
    ['Crocmagnon (step comment)', 'The offset sensor cable goes at the <b>front right</b>, not at the back.'],
    ['Matt-G (step comment)', 'The INDX-kit version of the offset-sensor-holder has the alignment wall on the <b>screw side</b> instead of the opposite side. Don\u2019t panic if your part looks different from the photo.'],
  ],
  1099523: [
    ['Prusa (in-step note)', 'Because you are doing the GEN 2 upgrade too, this screw is only turned in <b>a few turns</b> now. It is fully tightened much later (Phase 16 in this guide).'],
    ['bioxz / Pri Pri (step comment)', 'The sensor must already be in position and loosely held here \u2014 it is <i>not</i> skipped completely. Otherwise the front-right expansion joint alignment at {{1111025}} becomes impossible to reason about.'],
  ],
  1099623: [
    ['Crocmagnon (step comment)', 'The offset sensor cable does not like staying in its groove. Tack it down with the zip tie before you let go of it.'],
  ],
  1099791: [
    ['krisztian96 / z073 / Spin360 (step comments)', 'Screw-name mismatch: the bag is labelled <b>M3x14bT</b> while the guide says <b>M3x14cT</b>. Same story with M3x4bT / M3x12bT. <b>Go by the length</b>, not the suffix.'],
  ],
  1099715: [
    ['Gen 2 conflict \u2013 read this', 'The INDX parts list asks for the old <b>6x3.1x8 mm heatbed spacer</b>. With the Gen 2 upgrade you instead use the <b>new 10 mm heatbed spacer</b> that you placed on the centre threaded hole at {{1110975}}. Keep the old 6 mm spacer in the spares box.'],
  ],
  1099880: [
    ['Prusa (in-step note)', 'With the GEN 2 upgrade you use the longer <b>M3x14</b> centre screw, not the M3x12 you removed.'],
    ['Gen 2 conflict', 'The centre spacer is the <b>new 10 mm Gen 2 spacer</b>, not the 6x3.1x8 mm one. Make sure it stays put as the heatbed goes down.'],
  ],
  1099926: [
    ['Prusa \u2013 MilFej (step comment)', '<b>Do not fully tighten the heatbed screws here.</b> They are torqued in the correct sequence at {{1111043}}, after the expansion joints are aligned.'],
    ['Pyron (step comment)', 'Use the expansion-joint aligner tool if you are doing the Gen 2 upgrade \u2013 and be aware you may have to loosen/remove the offset sensor again to align the front-right joint.'],
  ],
  1100056: [
    ['christopher-auer (step comment)', 'The text says \u201cthe M3x10 screw\u201d but there are actually <b>two</b>. Several people only found one in the kit \u2013 check your spares bag / reuse one from the old cover.'],
  ],
  1100190: [
    ['Matt-G (step comment)', 'Cut the zip tie <b>flush</b> with small side cutters \u2013 a stub here will slice your hand later.'],
  ],
  1100350: [
    ['Nicholas Borge (step comment)', 'If the lead screw bumps hard against the back of the bed-stop, stop and check that the bed-stop is seated flat and the nuts are fully pressed in before forcing anything.'],
  ],

  // ---- GEN 2 chapter 4 (Heatbed) ----
  1110953: [
    ['Crocmagnon (step comment)', '<b>Do not fully tighten these screws.</b> If you do, sliding the expansion joints in between the PTFE washers becomes very hard and you will destroy a washer.'],
    ['hammycheesy (step comment)', 'If a PTFE washer is not perfectly centred on the screw post it binds on the ridge and feels \u201ctight\u201d when it is not. Check each one.'],
    ['Prusa \u2013 Vojta Zeman', 'The original wording of this step was wrong and has since been corrected by Prusa.'],
  ],
  1110964: [
    ['Tjackal + 3Dmountains (step comments)', '<b>Best tip in the whole guide:</b> use the <b>Pulley-offset-tool</b> (the one marked \u201cX\u201d and \u201cY\u201d) to prise the two PTFE washers apart and hold them open while you slide the expansion joint in.'],
    ['Spin360 / Micah / Argh (step comments)', 'Work <b>one joint at a time</b>: screw + washers + joint, then snug that screw, then move on. Several people tore a washer by pre-tightening everything first.'],
    ['Smooph86 (r/prusa3d)', 'Alternative that works: back the screw off a quarter turn, slide the joint in, then tighten again. Brute force is not required.'],
    ['_Neal_Caffrey (r/prusa3d)', 'The kit only contains <b>one spare PTFE washer</b>. Damaging one is the single most reported problem of this upgrade \u2013 slow down here.'],
    ['Prusa \u2013 Vojta Zeman', 'The screw cannot be tightened further at this point; the joint is only clamped once the heatbed is installed.'],
  ],
  1110993: [
    ['RedMedia (step comment)', 'Recommended procedure: snug <b>all</b> screws first so the bed is centred but the joints can still move. Then tighten the <b>centre</b> screw fully. For each remaining joint, put the aligner on and rotate it slightly <b>counter-clockwise</b> so the joint is pre-loaded against the direction the screw will drag it, then tighten while holding it. Re-check with the aligner afterwards.'],
    ['PetrichorPete (article comment)', 'The tightening sequence is awkward: the <b>front-right</b> joint is blocked by the new INDX offset sensor and the aligner will not fit on it. Do that one by eye (sight straight down the 45\u00b0 edge), or briefly loosen the sensor.'],
  ],
  1111025: [
    ['z073 / bioxz (step comments)', 'This is the joint that the INDX offset sensor gets in the way of. The sensor screw is only a few turns in at this point \u2013 you can loosen it and swing the assembly aside if you must.'],
  ],
  1111043: [
    ['Prusa (in-step warning)', 'Tighten in sequence \u2013 centre, then the four edge screws, then the four corners \u2013 and repeat the whole sequence at least twice. Re-check afterwards that no joint has rotated.'],
  ],

  // ---- GEN 2 chapter 3 (Belts) ----
  1149106: [
    ['Clumsy-Creator (step comment)', 'Just <b>loosen</b> both tensioners \u2013 there is no benefit to removing them completely.'],
    ['Prusa \u2013 Vojta Zeman', 'This step used to appear in the wrong place in the guide; it has been fixed. The belts do need to be loose at this point.'],
  ],
  1149258: [
    ['Pyron (step comment)', 'They are <b>M3x35</b> screws, not M3x30.'],
    ['Paul (step comment)', 'Doing the INDX conversion at the same time? The cable clip shown here is already gone \u2013 that is expected.'],
    ['Prusa \u2013 Vojta Zeman', 'The <b>Main-cable-clip must stay in its original position</b> on the cable bundle for the whole upgrade. Don\u2019t slide it along the loom.'],
  ],
  1113142: [
    ['k1mu (step comment) \u2013 confirmed by Prusa', 'On the <b>right (Y) motor</b> the <b>grub-screw side of the pulley faces the motor</b>. Getting this backwards is the #1 cause of failed homing later.'],
    ['wubbr / Clumsy-Creator / WorstCase (step comments)', 'Coming from an original CORE One (non-Plus)? Several owners report the motor shaft is ~3 mm shorter so the shaft does not sit flush with the top of the pulley. That is fine \u2013 the <b>Pulley-offset-tool sets the height</b>, not the shaft end.'],
    ['Nicholas Borge (step comment)', 'Two grub screws per pulley: tighten the <b>lower</b> one against the flat of the shaft first, then rotate and do the second.'],
  ],
  1113272: [
    ['k1mu (step comment) \u2013 confirmed by Prusa', 'On the <b>left (X) motor</b> the grub-screw side of the pulley faces <b>away</b> from the motor \u2013 the opposite of the right motor. Use the \u201cX\u201d side of the Pulley-offset-tool.'],
    ['Spin360 (step comment)', 'A few pulleys shipped with an undersized bore (~4.9 mm) and are extremely tight. Test-fit before you press it fully home \u2013 getting it back off is painful.'],
  ],
  1113237: [
    ['iftibashir (step comment) \u2013 fixed by Prusa', 'It is <b>four</b> M3x35 screws from underneath plus <b>one</b> M3x6 for the motor mount.'],
  ],
  1113247: [
    ['Prusa INDX article', '<b>Skip this step.</b> The Bowden-guide is not used on the INDX conversion \u2013 take it off the printer once it is detached.'],
  ],
  1113364: [
    ['Atrica3D (step comment)', 'If your CORE One is from the first wave, this is the moment to lubricate the tensioner screws to prevent galling. (You already did this in Phase 9 of this guide.)'],
  ],
  1113481: [
    ['sgomes / dingo dan / TheWortLord (step comments)', 'Multiple people read this as the <b>lower</b> idler, not the upper one. Cross-check your routing against the \u201cBelt routing overview\u201d step before you commit.'],
  ],

  // ---- INDX chapter 4 (Toolhead & FS) ----
  1100900: [
    ['Nordvick / RedMedia (step comments)', 'The listed tightening order is debated \u2013 several people argue you should work from the middle outwards so any bow in the rail can escape to the ends. Prusa has not answered. If your gantry was already square and running well, this is the sequence to be careful with.'],
  ],
  1101015: [
    ['jetuser (step comment)', 'Insert the two <b>M3nS nuts into the Head-mounting-plate now</b>, before you thread the belts. Much easier.'],
    ['Fnord Prefect (step comment)', 'Hold the finished side with a zip tie while you work on the other side.'],
    ['SveeP (step comment)', 'Loosen or remove the tensioner screws from the pulleys first \u2013 they get refitted a few steps later.'],
    ['Meow (step comment)', '4\u20135 teeth of overhang is the <i>minimum</i> with the Gen 2 1.5GT belts. Being stingy here causes slipping later \u2013 several people had to redo this step.'],
  ],
  1101093: [
    ['Prusa (in-step note)', 'Before tightening, check on both sides that the belts run in their channels and are not pinched.'],
  ],
  1101147: [
    ['Prusa (in-step note)', 'Aim for ~8 mm from the edge of the tensioner, typically 8\u201310 turns. Fine-tuning happens in the Wizard at the end.'],
  ],
  1101234: [
    ['ever / Tkadla / Spin360 (step comments)', 'The \u201cM3x16T\u201d callout is a typo \u2013 use the <b>M3x18</b> listed in the parts preparation step.'],
  ],
  1101428: [
    ['thorthekitten (step comment)', 'Two <b>square M3nS nuts</b> drop into slots in the INDX toolhead to catch the two lower fan-shroud screws. Very easy to miss \u2013 if the screws \u201chave no thread\u201d, this is why.'],
  ],
  1101838: [
    ['Mastakko (step comment) \u2013 fixed by Prusa', 'The screw shown in the photo used to disagree with the parts list. Go by the parts-preparation step.'],
  ],
  1102215: [
    ['Prusa (in-step note)', 'Leave the <b>last connector of the head cable unplugged</b> \u2013 it gets connected when you fit the dock fan.'],
  ],
  1102345: [
    ['etmidust (step comment)', 'Use a <b>ball-end</b> Allen key for the M3x10 that joins the PTFE holder halves. Everyone who fought this step was using a straight key.'],
  ],
  1102933: [
    ['Fnord Prefect (step comment)', 'The pilot holes in the plastic can be very tight. Run the screw in slowly and back off if it starts to bite hard \u2013 don\u2019t snap the head.'],
  ],
  1103347: [
    ['Pri Pri (step comment)', 'Easier order: attach the cover first, then slide the PTFE tubes in.'],
  ],

  // ---- INDX chapter 5 ----
  1106028: [
    ['bioxz (step comment)', 'If you have the 8-tool version, fit the <b>top-right puck holders before tilting</b>. If you break the helper tool during the bottom holders you will need it again for the top-right ones \u2013 and the bottom ones can also be done with the wrench.'],
  ],
  1104485: [
    ['mtbrider (article/step comment)', 'This is exactly the point where people lose track of the multi-guide dance. In this guide you simply continue with the next phase \u2014 the Gen 2 heatbed alignment ({{1110993}}).'],
  ],

  // ---- INDX chapter 6 (Preflight) ----
  1109603: [
    ['r/prusa3d', 'Update the firmware <b>before</b> running the wizard. After flashing, check <i>Settings \u2192 Hardware</i> and make sure the <b>Gen 2 / 1.5GT belt</b> option matches the belts you actually installed \u2013 a wrong setting here throws \u201cearly ends\u201d and axis-check failures.'],
  ],
  1109875: [
    ['no_help_forthcoming (r/prusa3d)', 'If belt tensioning or the axis check keeps failing after a Gen 2 + INDX build, the usual suspects are: pulley fitted the wrong way round, loose grub screws, belts clamped at unequal lengths, gantry not square, out-of-round pulley, or simply wrong tension.'],
    ['Matthew Woodard (article comment)', 'A belt resonates at <b>more than one</b> frequency, and the harmonics sound like the target too. He kept over-tightening to reach the second one and failed both the X and Y axis tests, and the gantry pulled out of position. Sweeping down again, the pitch dropped, went muddy, rose, then dropped back to the same reading \u2013 <b>the first, lowest slow wave is the real one</b>.'],
    ['dimonf (article comment)', 'Homing calibration failed after \u201cproper\u201d tensioning because he misread the strobed vibration. The <a href="https://belt.connect.prusa3d.com/" target="_blank" rel="noopener">belt tuner web app</a> just reports a plain number with no guessing \u2013 using it first made the wizard make sense.'],
    ['Joylessly7905 (article comment)', 'Since firmware 6.8.1 the standalone routine is called <b>Belt Tuning</b> and moved from <i>Settings \u2192 Manual Belt Tuning</i> into <i>Control \u2192 Calibrations &amp; Tests</i>. That is where you re-run it later.'],
    ['TheMeltrax + Spring (article comments)', 'Classic deadlock: the Y-axis calibration fails, but the calibration tests must be run in order so you cannot jump to belt tuning. Also check the printer <b>Model</b> setting \u2013 a factory reset can silently select the wrong machine (e.g. CORE One L+), which throws every axis test.'],
  ],
  1110209: [
    ['r/prusa3d (FW 6.9.0)', 'Tool-offset calibration failures are widely reported on 6.9.0. Keep a brass brush handy and wipe oozed filament off the nozzles and off the offset sensor board between attempts. Some users rolled back to 6.6 as a workaround.'],
    ['Ortekkk (r/prusa3d)', 'This step cycles through every tool \u2013 the ideal moment to finish the <b>toolhead bearing lubrication</b> from Phase 14. Check the mating surface after each swap and stop adding lube once it starts to build up.'],
  ],
};

export const ARTICLE_COMMENTS = [
  ['Tkadla', 'Several steps \u2013 bed spacers, the new sensor \u2013 would be far easier if the guide had you remove <b>both side panels and covers at the start</b>. The printer is lighter, easier to manipulate and you can actually see inside. <b>You already did this, which is why this guide is reordered around it.</b>'],
  ['PetrichorPete', 'The sequence for tightening the new expansion joints is off, since the front-right joint is blocked by the new offset sensor and the aligner tool can\u2019t be used on it.'],
  ['Bpendragon', 'While the right side panel is off, that is the perfect time to drill it yourself for the expanded bucket if you want that mod.'],
  ['MBCook', 'The article\u2019s step numbers (\u201c5.16 Securing the zip ties II\u201d) don\u2019t match the live guide. In the current guide it is step 17 of chapter 5, and chapter 5 <i>does</i> continue afterwards \u2013 you come back to it in Phase 15 here.'],
  ['Jim', '\u201cAfter replacing the pulley and belts on the right side, that\u2019s it \u2013 you don\u2019t tell us to bolt the motor back on, nor to do the left motor.\u201d In reality the GEN 2 belts chapter does cover both motors; this guide keeps every one of those steps in order so nothing is missed.'],
];

const BELT_ARTICLE = 'https://help.prusa3d.com/article/adjusting-belt-tension-core-one-core-one-indx-core-one-l_845048';
const BELT_TUNER = 'https://belt.connect.prusa3d.com/';

// Extra lines appended to the body of an official step, keyed by Prusa step id.
// Same line format as the custom steps in build.mjs.
export const EXTRA = {
  1109875: [
    [null, 0, 'note', `Rather than sending you off to <a href="${BELT_ARTICLE}" target="_blank" rel="noopener">Adjusting belt tension</a> mid-wizard, the relevant parts of that article are written out below \u2013 with the <b>INDX</b> and <b>Gen 2 (1.5GT)</b> differences already applied. Read it before you touch a tensioner screw.`],

    ['blue', 0, '<b>1 \u2013 Square the gantry.</b> On INDX this is done at the <b>back</b>, the opposite end from a plain CORE One.'],
    ['green', 1, 'Disable the motors first: <i>Control \u2192 Disable Motors</i>, or simply switch the printer off.'],
    ['orange', 1, 'By hand, move the INDX toolhead to the <b>rearmost Y position</b> and to the <b>centre of X</b>. The CORE One / CORE One L instructions say <i>front</i> \u2013 for INDX it is the <b>back</b>.'],
    ['green', 1, 'Press each gantry corner against the <b>back</b> of the CoreXY frame in turn. There must be <b>no play and no gap</b> on either side.'],
    ['green', 1, 'If one side has a gap: slightly loosen <b>both</b> tensioner bolts, taking more off the bolt on the corner with <i>less</i> play, then re-check. Repeat until both corners sit flush.'],
    ['green', 1, 'Badly racked? Fully loosen both tensioners, move the gantry half way along the rails, grip both ends and apply gentle counter-force against the tilt until it straightens. Guide it back to the check position by hand \u2013 with loose belts it will not pull itself there \u2013 and confirm no gap.'],
    ['green', 1, 'Then tighten both tensioner bolts <b>gradually, alternately and by the same amount</b>, holding the gantry if needed. Re-check that no gap has reappeared.'],
    [null, 0, 'caution', 'Apply force carefully \u2013 you can damage the belts or the bearings. Loose belts at this stage are expected; tension comes afterwards.'],
    [null, 0, 'note', 'Prusa\u2019s \u201cQuick gantry alignment\u201d box is copy-pasted into the INDX section and still says to verify at the <i>front</i>. Ignore that \u2013 for INDX, check at the back as above.'],

    ['blue', 0, '<b>2 \u2013 Let the wizard measure the resonance.</b>'],
    ['green', 1, 'The wizard first asks you to confirm the gantry alignment you just did, then excites each belt and strobes the light so you can see it vibrate.'],
    ['green', 1, 'Turn the encoder to sweep the frequency while watching the selected belt. You want a <b>slow, wide, steady travelling wave</b> \u2013 not a blur. Select that frequency on screen.'],
    ['green', 1, 'Upper and lower belt are measured separately. The wizard then shows both frequencies and which way to adjust.'],
    [null, 0, 'caution', 'A belt resonates at <b>several</b> frequencies. Sweep <b>upwards from low</b> and take the <b>first</b> slow wave. Locking onto a harmonic is the classic way to end up with wildly over-tight belts that pass tuning and then fail the X/Y axis checks.'],

    ['blue', 0, '<b>3 \u2013 Target frequency: use the wizard\u2019s range, not the CORE One numbers.</b>'],
    ['orange', 1, 'The widely quoted <b>98 Hz upper / 92 Hz lower</b> figures are for a stock CORE One. <b>They do not apply to your printer.</b>'],
    ['orange', 1, 'For <b>CORE One INDX</b> Prusa publishes no fixed value \u2013 the target is the <b>range the belt tuning wizard displays on screen</b>. That is the only number you should be aiming at.'],
    ['green', 1, `The <a href="${BELT_TUNER}" target="_blank" rel="noopener">Prusa belt tuner web app</a> (also in the Prusa App under <i>Menu \u2192 Belt Tuner</i>) only carries CORE One/+ presets, so its verdict is wrong for you \u2013 but it is a perfectly good plain frequency meter. Park the toolhead at the front-right, strum the middle of a belt on the front of the gantry with the phone alongside, and use the raw Hz reading to sanity-check what the wizard reported.`],
    [null, 0, 'note', 'Before you start, confirm the printer\u2019s <b>Model</b> and <i>Settings \u2192 Hardware</i> really are set to CORE One+ Gen 2 / INDX with <b>1.5GT</b> belts. A wrong model makes the wizard target the wrong range, and every axis test afterwards fails.'],

    ['blue', 0, '<b>4 \u2013 Adjust.</b>'],
    ['green', 1, 'Tighter screw = higher frequency. Turn <b>half a turn at a time</b> and re-measure; do not make big jumps.'],
    ['green', 1, 'Work on <b>both</b> tensioners <b>evenly and alternately</b> so the gantry stays square while the tension changes.'],
    ['green', 1, 'If the two belts refuse to match, a spread of up to about <b>8 Hz</b> is tolerated as long as both sit inside the wizard\u2019s range. The lower belt reading slightly <i>higher</i> than the upper is acceptable.'],
    [null, 0, 'reminder', 'Both M3x30 tensioner screws were lubricated back in Phase 6. If a screw feels gritty or starts to squeal, stop \u2013 dry tensioner screws gall and seize, and the fix is replacing the tensioner and its pulley.'],
    [null, 0, 'caution', 'If a <b>gap opens at a gantry corner</b> while you tighten, stop. Loosen both tensioner screws and go back to point 1 \u2013 the gantry has racked, and no amount of tensioning will fix that.'],
  ],
};
