import {Controller, Post} from "@nestjs/common";
import {ListService} from "./list/list.service";

@Controller('')
export class AppController {
    private listService: ListService;

    constructor() {
        this.listService = new ListService();
        this.listService.connectDatabase();
    }

    @Post('/login')
    login(user: String, password: String): String {
        return this.listService.login(user, password);
    }
}