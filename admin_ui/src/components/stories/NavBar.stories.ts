import NavBar from '../NavBar.vue'

export default {
    title: 'Components/NavBar',
    component: NavBar,
    args: {
        mode: "dark_mode",
    },
    argTypes: {
        mode: {
            options: ["light_mode", "dark_mode"],
            control: { type: 'select' }
        }
    }
}

export const Primary = (args, { argTypes }) => {
    return {
        components: { NavBar },
        props: Object.keys(argTypes),
        template: '<NavBar :class="mode" :bind="$props" />',
        data: {
            mode: args.mode
        }
    }
}
