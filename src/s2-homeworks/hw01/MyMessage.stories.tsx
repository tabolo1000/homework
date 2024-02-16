
import type {Meta, StoryObj} from '@storybook/react';
import Message from "./message/Message";
import {message0} from "./HW1";


let meta:Meta<typeof Message> = {
    component: Message
}

export default meta;
type Story = StoryObj<typeof Message>;


export const Primary: Story = {
  render: () => <Message message={message0} />,
};


