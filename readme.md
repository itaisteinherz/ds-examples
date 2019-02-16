# ds-examples [![Build Status](https://travis-ci.org/itaisteinherz/ds-examples.svg?branch=master)](https://travis-ci.org/itaisteinherz/ds-examples)

> Various examples using the DualShock 4 controller.

## Install

```
$ git clone https://github.com/itaisteinherz/ds-examples.git
$ cd ds-examples
$ yarn
```

_Note that using npm instead of yarn currently fails because of [an issue with `node-hid`](https://github.com/node-hid/node-hid/issues/266) (I've already opened a PR to resolve this in `node-dualshock-controller` - [rdepena/node-dualshock-controller#82](https://github.com/rdepena/node-dualshock-controller/pull/82))._


## Usage

```
$ node index.js
```


## Notes

### Running the different examples

If you connect the controller to your computer using bluetooth, you can only access the buttons and D-pads, which means you will only be able to run the `basic.js` example.

To run the rest of the examples (`flash.js`, `light.js`, `rumble.js` and `touchpad.js`), connect the controller to your computer using a micro-USB cable, which will allow you to access the touchpad, the main LED of the controller and its rumble motors.


## License

MIT © [Itai Steinherz](https://github.com/itaisteinherz)
