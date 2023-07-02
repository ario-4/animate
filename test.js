let element = document.querySelectorAll(".little");
let contaner = document.querySelector(".palabra");
let background = document.querySelector('.background')
let hill1 = document.querySelector('.hill1')
let hill2 = document.querySelector('.hill2')
let hill3 = document.querySelector('.hill3')
let sun = document.querySelector('.sun')
let light = document.querySelectorAll('.light')
let cloud = document.querySelector('.cloud')
let cloud1 = document.querySelector('.cloud1')

animate();
widthBackground()
animationBGSiza()
lightAnimate2()
lightAnimate();


async function widthBackground() {
    await delay(9100);
    await size(background, 1200, undefined, 100)
    await size(background, 1300, undefined, 100)
    await delay(600)
    await move(sun, undefined, 20, 300)
    await move(light[1], -7, 73, 200)
    await move(light[2], -5, 40, 200)
    await delay(1000)
    await move(cloud1, 1000, 280, 300)
    await move(cloud1, 900, 220, 100000)
    await move(cloud1, 1200, 270, 200000)
}
async function lightAnimate() {
    await delay(12000)
    loopLight()
    async function loopLight() {
        await size(light[0], 40, undefined, 300)
        await size(light[0], 20, undefined, 300)

        await size(light[2], 40, undefined, 300)
        await size(light[2], 20, undefined, 300)

        loopLight()
    }

}
async function lightAnimate2() {
    await delay(12000)
    loopLight1()
    async function loopLight1() {
        await size(light[1], 40, undefined, 300)
        await size(light[1], 20, undefined, 300)

        await size(light[3], 40, undefined, 300)
        await size(light[3], 20, undefined, 300)

        loopLight1()
    }

}

async function animationBGSiza() {
    await size(contaner, 300, undefined, 3000)
    await delay(3700)
    await size(contaner, 350, undefined, 1000)
    await delay(1000)
    await size(contaner, 300, undefined, 2000)

}

async function animate() {

    await move(element[element.length - 1], 240, undefined, 300);
    await scaleX(element[element.length - 1], .8, 100)
    await scaleX(element[element.length - 1], 1, 100)
    await delay(200)

    await move(element[element.length - 2], 220, undefined, 300);
    await scaleX(element[element.length - 2], .8, 100)
    await scaleX(element[element.length - 2], 1, 100)
    await move(element[element.length - 2], 213, undefined, 50);
    await delay(200)

    await move(element[element.length - 3], 210, undefined, 300);
    await scaleX(element[element.length - 3], .8, 100)
    await scaleX(element[element.length - 3], 1, 100)
    await move(element[element.length - 3], 205, undefined, 50);
    await delay(200)

    await move(element[element.length - 4], 185, undefined, 300);
    await scaleX(element[element.length - 4], .8, 100)
    await scaleX(element[element.length - 4], 1, 100)
    await move(element[element.length - 4], 180, undefined, 50);
    await delay(200)

    await move(element[element.length - 5], 165, undefined, 300);
    await scaleX(element[element.length - 5], .8, 100)
    await scaleX(element[element.length - 5], 1, 100)
    await move(element[element.length - 5], 160, undefined, 50);
    await delay(200)

    await move(element[element.length - 6], 135, undefined, 300);
    await scaleX(element[element.length - 6], .8, 100)
    await scaleX(element[element.length - 6], 1, 100)
    await move(element[element.length - 6], 130, undefined, 50);
    await delay(200)

    await move(element[element.length - 7], 125, undefined, 300);
    await scaleX(element[element.length - 7], .8, 100)
    await scaleX(element[element.length - 7], 1, 100)
    await move(element[element.length - 7], 120, undefined, 50);
    await delay(200)

    await move(element[element.length - 8], 100, undefined, 300);
    await scaleX(element[element.length - 8], .8, 100)
    await scaleX(element[element.length - 8], 1, 100)
    await move(element[element.length - 8], 95, undefined, 50);
    await delay(200)

    await move(element[element.length - 9], 270, undefined, 300);

    await rotate(element[element.length - 9], -10, 100)
    await move(element[element.length - 9], 273, undefined, 100);
    await rotate(element[element.length - 9], -12, 100)
    await move(element[element.length - 9], 283, undefined, 100);
    await rotate(element[element.length - 9], -14, 100)
    await move(element[element.length - 9], 293, undefined, 100);
    await rotate(element[element.length - 9], -16, 100)
    await move(element[element.length - 9], 303, undefined, 100);
    await move(element[element.length - 9], 313, undefined, 100);
    await rotate(element[element.length - 9], -10, 100)
    await rotate(element[element.length - 9], 0, 100)
    await delay(700)

    await scaleX(element[element.length - 9], 8, 300)
    await move(element[element.length - 9], 110, undefined, 50);
    await scaleX(element[element.length - 9], 1, 300)

    await move(background, 0, undefined, 400);
    await scaleX(background, .9, 100)
    await scaleX(background, 1, 100)

    await move(hill1, undefined, 350, 300)

    await move(hill2, 1100, 340, 300)
    await move(light[0], 0, 0, 200)
    await move(light[3], 40, 110, 200)
    await move(cloud, 200, 80, 300)
    await move(cloud, 600, 140, 100000)
    await move(cloud, 1200, 110, 200000)


}

function rotate(elm, endAngle, duration) {
    return new Promise(function (resolve, reject) {
        let startAngle = parseFloat(elm.style.transform.substr(7));
        if (Number.isNaN(startAngle)) {
            startAngle = 0;
        }
        let angle = startAngle;
        let frames = duration / 15;
        let step = (endAngle - startAngle) / frames;
        let i = 0;
        const interval = setInterval(() => {
            angle += step;
            elm.style.transform = `rotate(${angle}deg)`;
            i++;
            if (i >= frames) {
                elm.style.transform = `rotate(${endAngle}deg)`;

                clearInterval(interval);
                resolve();
            }
        }, 15);
    });

}
function move(elm, left, top, duration) {
    return new Promise(function (resolve, reject) {
        let body = document.getElementById("body");

        let x = parseInt(getComputedStyle(elm).getPropertyValue("left"));
        let y = parseInt(getComputedStyle(elm).getPropertyValue("top"));
        const frames = duration / 15;
        let stepX = (left - x) / frames;
        const stepY = (top - y) / frames;
        let i = 0;

        const interval = setInterval(function () {

            x += stepX;
            y += stepY;
            i++;
            elm.style.left = `${x}px`;
            elm.style.top = `${y}px`;

            if (i >= frames) {
                elm.style.left = `${x}px`;
                elm.style.top = `${y}px`;
                clearInterval(interval);
                resolve();
            }

        }, 15);
    });
}
function scaleX(elm, endScale, duration) {
    return new Promise(function (resolve, reject) {
        let startScale = parseFloat(elm.style.transform.substr(7));
        if (Number.isNaN(startScale)) {
            startScale = 1;
        }
        let scale = startScale
        let frames = duration / 15;
        let step = (endScale - startScale) / frames;
        let i = 0;
        const interval = setInterval(() => {
            scale += step
            elm.style.transform = `scale(${scale})`
            i++
            if (i >= frames) {
                elm.style.transform = `scale(${endScale})`;
                clearInterval(interval)
                resolve()

            }
        }, 15)
    })
}
function delay(duration) {
    return new Promise((resolve, reject) => {
        setInterval(() => resolve(), duration);
    })
}
function size(elm, newWidth, newHeight, duration) {
    return new Promise((resolve, reject) => {
        let oldWidth = parseFloat(getComputedStyle(elm).getPropertyValue('width'));
        let oldHeight = parseFloat(getComputedStyle(elm).getPropertyValue('height'));
        const frames = duration / 15
        let stepWidth = (newWidth - oldWidth) / frames;
        let stepHeight = (newHeight - oldHeight) / frames;
        i = 0;
        const interval = setInterval(function () {
            oldWidth += stepWidth;
            oldHeight += stepHeight;
            i++;
            elm.style.width = `${oldWidth}px`
            elm.style.height = `${oldHeight}px`
            if (i >= frames) {
                elm.style.width = `${oldWidth}px`
                elm.style.height = `${oldHeight}px`
                clearInterval(interval);
                resolve();

            }
        }, 15)
    })
}

