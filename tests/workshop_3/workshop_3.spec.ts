import {test, expect} from 'playwright/test';

test.skip ('Advanced interractions', async ({page})=>{
    await page.goto('file:///Users/katerynavolynets/Playwright/tests/workshop_3/index.html') ;
    await page.hover('button#hover-me');
    expect(await page.textContent('button#hover-me')).toContain('Text Changed!');

    await page.click("button#context-menu", {button: 'right'});
    expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

    await page.dblclick('button#double-click');
    expect(await page.locator('img').count()).toBe(1);


})

test.skip ('Drag and drop', async ({page})=>{
await page.goto('file:///Users/katerynavolynets/Playwright/tests/workshop_3/index.html') ;
await page.dragAndDrop('.drag-source', '.drop-target');
expect(await page.textContent('.drop-target')).toContain('Success');
await page.waitForTimeout(3000);

})

test ('iFrame handling', async ({page}) => {
    await page.goto('file:///Users/katerynavolynets/Playwright/tests/workshop_3/index.html');
    const iframeElement = await page.frame({name: 'iframeName'})
    const inputSelector = '#iframe-input'
    if (iframeElement){
    await iframeElement.type(inputSelector, 'Hello play');
    expect(await iframeElement.locator(inputSelector).inputValue()).toContain('Hello play')
    }else{
        console.error("error")
    }

})