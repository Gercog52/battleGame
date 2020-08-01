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
const speed = 1;
const setColorTeam = () => {ctx.fillStyle = 'green'}
setColorTeam();
ctx.fillRect(cord.x, cord.y, size.w, size.h);

const viewRect = () => {
  clearFull();
  setColorTeam();
  ctx.fillRect(cord.x, cord.y, size.w, size.h);
}

const moveRight = () => {
  return setInterval(() => {
    clearFull();
    cord.x+=speed;
    viewRect();
  }, 1)
}
const moveLeft = () => {
  return setInterval(() => {
    clearFull();
    cord.x-=speed;
    viewRect();
  }, 1)
}
const moveTop = () => {
  return setInterval(() => {
    clearFull();
    cord.y-=speed;
    viewRect();
  }, 1)
}
const moveBottom = () => {
  return setInterval(() => {
    clearFull();
    cord.y+=speed;
    viewRect();
  }, 8)
}

// @ts-ignore
const state = {
  isTopIntervalIndex: 0   as unknown as NodeJS.Timeout,
  isDownIntervalIndex: 0  as unknown as NodeJS.Timeout,
  isLeftIntervalIndex: 0  as unknown as NodeJS.Timeout,
  isRightIntervalIndex: 0 as unknown as NodeJS.Timeout,
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 's': {
      if (!state.isDownIntervalIndex)
      state.isDownIntervalIndex = moveBottom();
      break;
    }
    case 'w': {
      if(!state.isTopIntervalIndex)
      state.isTopIntervalIndex = moveTop();
      break;
    }
    case 'd': {
      if(!state.isRightIntervalIndex)
      state.isRightIntervalIndex = moveRight();
      break;
    }
    case 'a': {
      if(!state.isLeftIntervalIndex)
      state.isLeftIntervalIndex = moveLeft();
      break;
    }
  }
})
document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 's': {
      clearInterval(state.isDownIntervalIndex);
      state.isDownIntervalIndex = 0 as any;
      break;
    }
    case 'w': {
      clearInterval(state.isTopIntervalIndex);
      state.isTopIntervalIndex = 0 as any;
      break;
    }
    case 'd': {
      clearInterval(state.isRightIntervalIndex);
      state.isRightIntervalIndex = 0 as any;
      break;
    }
    case 'a': {
      clearInterval(state.isLeftIntervalIndex);
      state.isLeftIntervalIndex = 0 as any;
      break;
    }
  }
})