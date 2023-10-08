import {by, device, element, waitFor} from 'detox'
const looksSame = require('looks-same')
const execSync = require('child_process').execSync

const fs = require('fs')

const writeDiffs = async (imagePath, expectedImagePath) => {
  await looksSame.createDiff({
    reference: imagePath,
    current: expectedImagePath,
    diff: './e2e/diffs/initial-screen.png',
    highlightColor: '#ff00ff',
    strict: false,
    tolerance: 5,
    antialiasingTolerance: 0,
    ignoreAntialiasing: true,
    ignoreCaret: true,
  })
}

describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Home screen is valid', async () => {
    await waitFor(element(by.id('initialScreenRoot')))
      .toBeVisible()
      .withTimeout(2000)

    if (device.getPlatform() === 'ios') {
      expect(await element(by.id('initialScreenRoot'))).toBeVisible()
    } else {
      // This is needed to make status bar to be same as in the snapshot
      execSync('adb shell settings put global sysui_demo_allowed 1')
      execSync(
        'adb shell am broadcast -a com.android.systemui.demo -e command clock -e hhmm 1200',
      )
      const homeScreenSnapshotPath = './e2e/assets/home-screen.png'
      const imagePath = await device.takeScreenshot('home-screen')
      await expectBitmapsToBeEqual(imagePath, homeScreenSnapshotPath)
      // })
    }
  })
})

async function expectBitmapsToBeEqual(imagePath, expectedImagePath) {
  const bitmapBuffer = fs.readFileSync(imagePath)
  const expectedBitmapBuffer = fs.readFileSync(expectedImagePath)

  const {equal} = await looksSame(bitmapBuffer, expectedBitmapBuffer, {
    tolerance: 5,
    ignoreAntialiasing: true,
  })

  if (equal) {
    await writeDiffs(imagePath, expectedImagePath)
  }

  if (!equal) {
    throw new Error(
      `Expected image at ${imagePath} to be equal to image at ${expectedImagePath}, but it was different!`,
    )
  }
}
