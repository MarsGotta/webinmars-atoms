import { html } from 'lit-html';
import '../mars-button.js';

export default {
  title: 'Button',
  component: 'mars-button',
  argTypes: {
    title: { control: 'text' },
    type: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({
  type,
  title = 'Hello world',
  counter = 5,
  textColor,
  slot = 'Mars Button',
}) {
  return html` <mars-button .type=${type}>${slot}</mars-button> `;
}

export const Regular = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Active = Template.bind({});
Active.args = {
  type: 'active',
};
