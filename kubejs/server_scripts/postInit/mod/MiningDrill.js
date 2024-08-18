ServerEvents.recipes(event => {

  event.recipes.susy.mining_drill('j70zye9yvwvtsv') // remapped from original line 6
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(metaitem('rock.orthomagmatic'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('a5ivdsjkeldqyy') // remapped from original line 13
    .notConsumable(safeItemId('1x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.metamorphic'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('mf3do3ypearcca') // remapped from original line 20
    .notConsumable(safeItemId('2x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.sedimentary'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('gwvhvz2ld1roy7') // remapped from original line 27
    .notConsumable(safeItemId('3x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.hydrothermal'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('nurlfhcxop7msi') // remapped from original line 34
    .notConsumable(safeItemId('4x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.alluvial'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('xmnkgd3k4nh2td') // remapped from original line 41
    .notConsumable(safeItemId('5x susy:deposit_block', ')))
    .itemOutputs(metaitem('rock.magmatic_hydrothermal'))
    .duration(20)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import classes.*;
  // import net.minecraft.init.Blocks;
  // MINING_DRILL = recipemap('mining_drill')
});