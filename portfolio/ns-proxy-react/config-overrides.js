const {
    override,
    addLessLoader,
    disableChunk,
    addBabelPlugins,
    removeModuleScopePlugin,
    addBabelPresets
  } = require("customize-cra");
  
  module.exports = override(
    // ...addBabelPresets("@babel/preset-env", "@babel/preset-react"),
    ...addBabelPlugins(
        [
            "@babel/plugin-transform-react-jsx",
            {
                "throwIfNamespace": false,
                "pragma": "Neuron.createCell",
                "pragmaFrag": "Neuron.Fragment"
            }
        ],
    ),
    // disableChunk(),
    // removeModuleScopePlugin()
  );
  