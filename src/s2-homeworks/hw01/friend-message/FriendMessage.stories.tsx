import {Meta, StoryObj} from "@storybook/react";
import FriendMessage from "./FriendMessage";
import {friendMessage0} from "../HW1";


const meta:Meta<typeof FriendMessage> = {
    component: FriendMessage,
}

export default meta;

type Story = StoryObj<typeof FriendMessage>;

export const Secondary: Story = {
    render: () => <FriendMessage message={friendMessage0}></FriendMessage>
}