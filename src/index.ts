const canvas = document.body.querySelector('canvas');
const ctx    = canvas.getContext('2d');
const clearFull = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cord = {
  x: 10,
  y: 10
};
const size = {
  w: 40,
  h: 40,
}
const sizeBol = {
  w: 20,
  h: 20,
}

const speed = 2;
const setColorTeam = () => {ctx.fillStyle = 'green'}
setColorTeam();
ctx.fillRect(cord.x, cord.y, size.w, size.h);

const viewRect = () => {
  clearFull();
  setColorTeam();
  ctx.fillRect(cord.x, cord.y, size.w, size.h);
}


const testBol = {
  x: 0,
  y: 0,
}
const viewRectBol = (bol: typeof testBol) => {
  setColorTeam();
  ctx.fillRect(bol.x,bol.y,sizeBol.w,sizeBol.h);
}

const indexUpperPosition = {
  x: 0,
  y: 0,
}
const bools: Array<typeof testBol> = [];

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 32) {
    bools.push({
      x: cord.x,
      y: cord.y
    })
  }
  switch (e.key) {
    case 's': {
      if (!(indexUpperPosition.y == speed))
        indexUpperPosition.y += speed;
      break;
    }
    case 'w': {
      if (!(indexUpperPosition.y == -speed))
      indexUpperPosition.y-=speed;
      break;
    }
    case 'd': {
      if (!(indexUpperPosition.x == speed))
      indexUpperPosition.x+=speed;
      break;
    }
    case 'a': {
      if (!(indexUpperPosition.x == -speed))
      indexUpperPosition.x-=speed;
      break;
    }
  }
})
document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 's': {
      indexUpperPosition.y = 0;
      break;
    }
    case 'w': {
      indexUpperPosition.y = 0;
      break;
    }
    case 'd': {
      indexUpperPosition.x = 0;
      break;
    }
    case 'a': {
      indexUpperPosition.x = 0;
      break;
    }
  }
})
function drow () {
  cord.y+=indexUpperPosition.y;
  cord.x+=indexUpperPosition.x;
  viewRect();
  for (let t=0; t<bools.length; t++) {
    bools[t].x+=speed;
    viewRectBol(bools[t]);
  }
  window.requestAnimationFrame(drow);
}
drow();