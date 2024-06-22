import { Meta, StoryObj } from "@storybook/react";
import User from "./User";





const meta:Meta<typeof User> = {
    title: "/hw2/User",
    component: User,
    args:{
        u: {_id: 0, name: 'Кот', age: 3}
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof User>
export const UserStory: Story = {
    render: (arg) => <table style={{border: "2px solid blue"}}><User {...arg}/></table>
} 