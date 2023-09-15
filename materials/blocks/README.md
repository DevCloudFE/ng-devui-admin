# DevUI Admin Materials

Materials of ng-devui-admin.

## Install

```bash
# Install package under your project.
npm i ng-devui-materials
```

## Preview

For a better experience, you can go to [DevUI Materials](https://devui.design/admin-materials/) for more details.

## How to Use

- You can simply copy our code of blocks and paste to your own project, but you need to import dependencies if there is a `missing dependencies` error.

- Make use of our schematics **(This is the easiest way)**.

```bash
ng new your-project && cd your-project
ng add ng-devui-admin

npm i ng-devui-materials
```

Then cd into your page folder to add our blocks.

```bash
# For Example
cd src/app/pages/getting-started/sample
ng g ng-devui-admin:blocks

# You can also create a page with our blocks
# cd src/app/pages/getting-started
# ng g ng-devui-admin:views
```

## License

The MIT License.
