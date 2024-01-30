import { Component } from "./decorators/Component";

@Component({
    selector:'app-user',
    template: `
    <div>
        {{firstName}}
    </div>
    `
})
export default class UserComponent {
    private firstName: string = "Peter";
    get name() {
        return this.firstName;
    }
}