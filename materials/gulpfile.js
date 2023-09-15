const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const template = require('gulp-template');

function getMenu() {
  let menu = [];
  fs.readdirSync(path.resolve('./blocks')).forEach((dirName) => {
    let buffer;
    if (fs.lstatSync(path.resolve(`./blocks/${dirName}`)).isDirectory()) {
      buffer = fs.readFileSync(path.resolve(`./blocks/${dirName}/package.json`), 'utf-8');
    }
    let strContent;
    if (buffer) {
      strContent = JSON.parse(buffer);
      menu.push({
        title: `${dirName}`,
        blockName: strContent['blockConfig']['title'],
        blockNameEn: strContent['blockConfig']['title-en'],
      });
    }
  });
  return menu;
}

function getMenuByType() {
  let formMenus = [];
  let listMenus = [];
  let otherMenus = [];
  let chartMenus = [];
  fs.readdirSync(path.resolve('./blocks')).forEach((dirName) => {
    let buffer;
    if (fs.lstatSync(path.resolve(`./blocks/${dirName}`)).isDirectory()) {
      buffer = fs.readFileSync(path.resolve(`./blocks/${dirName}/package.json`), 'utf-8');
    }
    let strContent;
    if (buffer) {
      strContent = JSON.parse(buffer);
      if (strContent['blockConfig']['type'] === 'form') {
        formMenus.push({
          link: `./materials/${dirName}`,
          title: `${dirName}`,
          linkType: 'routerLink',
        });
      }
      if (strContent['blockConfig']['type'] === 'list') {
        listMenus.push({
          link: `./materials/${dirName}`,
          title: `${dirName}`,
          linkType: 'routerLink',
        });
      }
      if (strContent['blockConfig']['type'] === 'others') {
        otherMenus.push({
          link: `./materials/${dirName}`,
          title: `${dirName}`,
          linkType: 'routerLink',
        });
      }
      if (strContent['blockConfig']['type'] === 'chart') {
        chartMenus.push({
          link: `./materials/${dirName}`,
          title: `${dirName}`,
          linkType: 'routerLink',
        });
      }
    }
  });
  return {
    formMenus: formMenus,
    listMenus: listMenus,
    chartMenus: chartMenus,
    otherMenus: otherMenus,
  };
}

function getBlocksData() {
  let blocksData = [];
  fs.readdirSync(path.resolve('./blocks')).forEach((dirName) => {
    let buffer;
    if (fs.lstatSync(path.resolve(`./blocks/${dirName}`)).isDirectory()) {
      buffer = fs.readFileSync(path.resolve(`./blocks/${dirName}/package.json`), 'utf-8');
    }
    let strContent;
    if (buffer) {
      strContent = JSON.parse(buffer);
      blocksData.push({
        id: `${dirName}`,
        title: strContent['blockConfig']['title'],
        titleEn: strContent['blockConfig']['title-en'],
        npmRepo: strContent['name'],
        creator: strContent['author'],
        tags: JSON.stringify([...strContent['keywords'], ...strContent['blockConfig']['category']]),
        blockName: strContent['blockConfig']['name'],
      });
    }
  });
  return blocksData;
}

function getOverviewData() {
  let formData = [];
  let listData = [];
  let otherData = [];
  let chartData = [];
  fs.readdirSync(path.resolve('./blocks')).forEach((dirName) => {
    let buffer;
    if (fs.lstatSync(path.resolve(`./blocks/${dirName}`)).isDirectory()) {
      buffer = fs.readFileSync(path.resolve(`./blocks/${dirName}/package.json`), 'utf-8');
    }
    let strContent;
    if (buffer) {
      strContent = JSON.parse(buffer);
      if (strContent['blockConfig']['type'] === 'form') {
        formData.push({
          name: dirName,
          screenshot: `assets/${dirName}.png`,
          screenshotAlt: `${dirName}`,
          title: strContent['blockConfig']['title'],
          titleEn: strContent['blockConfig']['title-en'],
          description: strContent['description'],
          descriptionEn: strContent['description-en'],
        });
      }
      if (strContent['blockConfig']['type'] === 'list') {
        listData.push({
          name: dirName,
          screenshot: `assets/${dirName}.png`,
          screenshotAlt: `${dirName}`,
          title: strContent['blockConfig']['title'],
          titleEn: strContent['blockConfig']['title-en'],
          description: strContent['description'],
          descriptionEn: strContent['description-en'],
        });
      }
      if (strContent['blockConfig']['type'] === 'others') {
        otherData.push({
          name: dirName,
          screenshot: `assets/${dirName}.png`,
          screenshotAlt: `${dirName}`,
          title: strContent['blockConfig']['title'],
          titleEn: strContent['blockConfig']['title-en'],
          description: strContent['description'],
          descriptionEn: strContent['description-en'],
        });
      }
      if (strContent['blockConfig']['type'] === 'chart') {
        chartData.push({
          name: dirName,
          screenshot: `assets/${dirName}.png`,
          screenshotAlt: `${dirName}`,
          title: strContent['blockConfig']['title'],
          titleEn: strContent['blockConfig']['title-en'],
          description: strContent['description'],
          descriptionEn: strContent['description-en'],
        });
      }
    }
  });

  return {
    formData: formData,
    listData: listData,
    chartData: chartData,
    otherData: otherData,
  };
}

function getRouteData() {
  let routeData = [];
  fs.readdirSync(path.resolve('./blocks')).forEach((dirName) => {
    let buffer;
    if (fs.lstatSync(path.resolve(`./blocks/${dirName}`)).isDirectory()) {
      buffer = fs.readFileSync(path.resolve(`./blocks/${dirName}/package.json`), 'utf-8');
    }
    let strContent;
    if (buffer) {
      strContent = JSON.parse(buffer);
      routeData.push({
        path: dirName,
        component: `${strContent['blockConfig']['name']}Component`,
        module: `${strContent['blockConfig']['name']}Module`,
        importComponentPath: `blocks/${dirName}/src/${dirName}.component`,
        importModulePath: `blocks/${dirName}/src/${dirName}.module`,
      });
    }
  });
  return routeData;
}

function movePicture() {
  fs.readdirSync(path.resolve('./blocks')).forEach((dirName) => {
    if (fs.existsSync(path.resolve(`./blocks/${dirName}/${dirName}.png`))) {
      fs.renameSync(path.resolve(`./blocks/${dirName}/${dirName}.png`), path.resolve(`./src/assets/${dirName}.png`));
    }
  });
}

gulp.task('update-menu', function (done) {
  const typeMenus = getMenuByType();
  const menu = getMenu();

  gulp
    .src(`./templates/menu.ts`)
    .pipe(
      template({
        formMenus: typeMenus.formMenus,
        listMenus: typeMenus.listMenus,
        chartMenus: typeMenus.chartMenus,
        otherMenus: typeMenus.otherMenus,
      })
    )
    .pipe(gulp.dest('./src/app/'));

  gulp
    .src(`./templates/menu-cn.ts`)
    .pipe(
      template({
        menus: menu,
      })
    )
    .pipe(gulp.dest('./src/assets/i18n/zh-CN'));
  gulp
    .src(`./templates/menu-en.ts`)
    .pipe(
      template({
        menus: menu,
      })
    )
    .pipe(gulp.dest('./src/assets/i18n/en-US'));
  done();
});

gulp.task('update-materials', function (done) {
  gulp
    .src(`./templates/materials.component.ts`)
    .pipe(
      template({
        blocksData: getBlocksData(),
      })
    )
    .pipe(gulp.dest('./src/app/materials/'));
  done();
});

gulp.task('update-overview', function (done) {
  const overviewData = getOverviewData();

  gulp
    .src(`./templates/overview.component.ts`)
    .pipe(
      template({
        formData: overviewData.formData,
        listData: overviewData.listData,
        chartData: overviewData.chartData,
        otherData: overviewData.otherData,
      })
    )
    .pipe(gulp.dest('./src/app/overview/'));
  done();
});

gulp.task('update-route', function (done) {
  gulp
    .src(`./templates/materials-routing.module.ts`)
    .pipe(
      template({
        routes: getRouteData(),
      })
    )
    .pipe(gulp.dest('./src/app/materials/'));
  done();
});

gulp.task('move-picture', function (done) {
  movePicture();
  done();
});
