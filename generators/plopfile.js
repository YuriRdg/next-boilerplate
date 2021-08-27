module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "a",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs"
      }
    ]
  })
}
