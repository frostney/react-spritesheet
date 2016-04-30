# react-spritesheet
Spritesheets for React

## Installation

```
npm install react-spritesheet
```

## Usage
This module exports three components:

### Sprite
This component is for displaying a part of a bigger image - a rectangular cutout as you will.

```jsx
<Sprite filename="hello.png" x={40} y={40} width={40} height={40} />
```

#### Props

##### filename
###### Type: `String`

The filename of the image to be displayed

##### x
###### Type: `Number`

The x offset of the image

##### y
###### Type: `Number`

The y offset of the image

##### width
###### Type: `Number`

The width of the image that will be displayed

##### height
###### Type: `Number`

The height of the image that will be displayed

### SpriteSheet
Providing an image and a spritesheet object, this will display an image from the pre-defined object.

```jsx
const spriteSheet = {
  image1: {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  },
  image2: {
    x: 100,
    y: 0,
    width: 100,
    height: 100,
  },
};

<SpriteSheet filename="myimage.png" data={spriteSheet} sprite="image1" />
```

For generating a spritesheet object, take a look at [TexturePacker](https://www.codeandweb.com/texturepacker) or [spritesmith](https://github.com/Ensighten/spritesmith).

#### Props

##### filename
###### Type: `String`

The filename of the image to be displayed

##### data
###### Type: `Object`

The spritesheet object, to be in the form of:
```json
{
  "<name>": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  }
}
```

##### sprite
###### Type: `String`

The name of the sprite that should be displayed

### AnimatedSpriteSheet
Similar to `Sprite`, but displays one sprite after another at a particular speed.

```jsx
<AnimatedSpriteSheet
  filename="myimage.png"
  initialFrame={0}
  frame={{ width: 120, height: 120 }}
  bounds={{ x: 0, y: 0, width: 480, height: 120 }}
  isPlaying
  loop
  speed={300}
/>
```

#### Props

##### filename
###### Type: `String`

The filename of the image to be displayed

##### initialFrame
###### Type: `Number`
###### Default: `0`

The initial frame of the image

##### frame
###### Type: `Object`

The dimensions of a single frame

##### bounds
###### Type: `Object`

The bounds of the image that will be used for displaying one frame after another.

##### isPlaying
###### Type: `Boolean`
###### Default: `true`

Determines if the spritesheet is actually playing.

##### loop
###### Type: `Boolean`
###### Default: `true`

Loops through the animation

##### speed
###### Type: `Number`
###### Default: `300`

The speed (in milliseconds) of displaying one frame after another

## Example

See `example/index.html`.

## License

MIT
