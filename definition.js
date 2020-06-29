

Blockly.Blocks['block_create_TCS34725'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_create_TCS34725",
        "message0": "tạo %1 ở địa chỉ %2",
        "args0": [
          {
            "type": "field_variable",
            "name": "sensor",
            "variable": "cảm biến tcs34725"
          },
          {
            "type": "field_input",
            "name": "local",
            "text": "0x29"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 30,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_create_TCS34725'] = function(block) {
Blockly.Python.definitions_['import_time'] = 'import time';
Blockly.Python.definitions_['import_machine'] = 'from machine import Pin, I2C';
Blockly.Python.definitions_['import_tcs34725'] = 'from tcs34725 import TCS34725';
Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
  var text_local = block.getFieldValue('local');
  // TODO: Assemble Python into code variable.
  var code = variable_sensor+' = TCS34725(i2c=I2C(-1, scl=Pin(22), sda=Pin(21)),address='+text_local+')\n';
  return code;
};

Blockly.Blocks['block_read_TCS34725'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_read_TCS34725",
        "message0": "đọc màu từ %1 theo dạng %2",
        "args0": [
          {
            "type": "field_variable",
            "name": "sensor",
            "variable": "cảm biến tcs34725"
          },
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "RGB",
                "rgb"
              ],
              [
                "HEX",
                "hex"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 30,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_read_TCS34725'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble Python into code variable.
    var code = variable_sensor+'.html_'+dropdown_type+'()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};