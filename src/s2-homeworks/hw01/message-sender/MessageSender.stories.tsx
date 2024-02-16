import {Meta, StoryObj} from "@storybook/react";
import MessageSender from "./MessageSender";
// import Message from "../message/Message";


const meta:Meta<typeof MessageSender> = {
    component: MessageSender,
}

export default meta;


type Story = StoryObj<typeof MessageSender>


export const Sender: Story = {
    render: () => <MessageSender M = {()=>{}}/> ,
}

