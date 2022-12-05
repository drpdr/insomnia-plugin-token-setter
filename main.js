// Template tag "token"
// See the docs: https://docs.insomnia.rest/insomnia/template-tags#template-tag-schema
module.exports.templateTags = [
    {
      name: 'token',
      description: 'A token used for requests, e.g. Bearer',
      async run (context) {
        const { store: { getItem } } = context;
        // use plugin's storage context to get data
        // See https://docs.insomnia.rest/insomnia/context-object-reference#contextstore
        const token = await getItem("token")
        return token;
      }
    }
  ];

// Folder action
// See the docs: https://docs.insomnia.rest/insomnia/hooks-and-actions#folder-actions
module.exports.requestGroupActions = [
    {
        label: 'Replace all tokens from clip',
        action: async (context) => {
            const token = context.app.clipboard.readText()
            // use plugin's storage context to persist data
            // See https://docs.insomnia.rest/insomnia/context-object-reference#contextstore
            context.store.setItem("token", token)
        },
    },
];