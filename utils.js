export const clamp = (min, max, value) => (
  Math.min(Math.max(value, min), max)
)

export const remap = (min1, max1, min2, max2, value) => (
  min2 + (max2 - min2) * (value - min1) / (max1 - min1)
)

export const reverseRemap = (min1, max1, min2, max2, value) => (
  remap(min1, max1, min2, max2, max1 - value)
)

export const remapFreq = (min, max, value) => (
  utils.remap(0, 255, min, max, value)
)

export const reverseRemapFreq = (min, max, value) => (
  utils.remap(0, 255, min, max, 255 - value)
)

export const toRadians = (degrees) => (
  degrees * Math.PI / 180
)

export const calcCircumference = (radius) => (
  2 * Math.PI * radius
)

export const randomFloatBetween = (min, max) => (
  Math.random() * (max - min) + min
)

export const randomIntBetween = (min, max) => (
  Math.round(utils.randomFloatBetween(min, max))
)

export const randomBool = () => (
  Math.random() >= 0.5
)

export const weightedRandomBool = (trueWeight) => (
  Math.random() <= trueWeight
)

export const randomSign = () => (
  Math.random() >= 0.5 ? 1 : -1
)

export const weightedRandomSign = (positiveWeight) => (
  utils.weightedRandomBool(positiveWeight) >= 0.5 ? 1 : -1
)

export const lerp = (a, b, t) => (
  a * (1 - t) + b * t
)
