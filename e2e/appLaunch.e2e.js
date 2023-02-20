describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
    // await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen titles', async () => {
    await expect(element(by.id('sectionTitle-Step One'))).toBeVisible();
    await expect(element(by.id('sectionTitle-See Your Changes'))).toBeVisible();
    await expect(element(by.id('sectionTitle-Debug'))).toBeVisible();
  });
});
