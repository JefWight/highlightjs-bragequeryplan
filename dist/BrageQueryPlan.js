hljs.registerLanguage('bqp', function(hljs)
{
  return {
    case_insensitive: true,
    contains:
      [
        {
          className: 'selector-attr',
          begin: '<',
          end: '>',
        },
        {
          begin:
            [
                '\\+',
                '[\\w]*',
            ],
          beginScope:
            {
                1: "section",
                2: "title"
            },
        },
        {
          className: 'variable',
          begin: '\\$[\\d]*',
        },
        {
          className: 'number',
          begin: /\[[\d]+\]/,
        },
        {
          className: 'meta-string',
          begin: /[\\\|]{1}/,
        }
      ]
  };
});