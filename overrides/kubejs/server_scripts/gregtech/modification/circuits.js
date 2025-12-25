ServerEvents.recipes(event => {
    event.recipes.gtceu.neutron_activator(('mutatedchip_processor'))
        .inputFluids('gtceu:radium 1250')
        .chancedInput('kubejs:mugatenic_light', 200, 0)
        .itemInputs('gtceu:wetware_processor', '12x gtceu:advanced_smd_resistor','6x gtceu:rad_away_pill', '6x gtceu:paracetamol_pill', '4x gtceu:naquadria_bolt')
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .chancedOutput('kubejs:mutatedchip_processor', 3000, 0)
        .outputFluids('gtceu:radon 250')
        .duration(5400)
        .addCondition(GTNNRecipes.setNA(400, 380))

        
    }
)