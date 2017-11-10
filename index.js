module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Address',
  addFields: [
    {
      name: 'lineOne',
      label: 'Address Line 1',
      type: 'string'
    },
    {
      name: 'lineTwo',
      label: 'Address Line 2',
      type: 'string'
    },
    {
      name: 'city',
      label: 'City/Town',
      type: 'string',
      required: true
    },
    {
      name: 'state',
      label: 'State/Province',
      type: 'string',
      required: true
    },
    {
      name: 'zip',
      label: 'Zip/Postal Code',
      type: 'string',
      required: true
    },
    {
      name: 'country',
      label: 'Country',
      type: 'string'
    }
  ]
};
