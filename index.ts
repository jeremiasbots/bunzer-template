// @bunland/lauri
import "reflect-metadata";
import { Service, Param, Get } from "@bunland/lauri"

@Service({ path: import.meta.path })
export default class IndexService {
    @Get()
    index(@Param("name") name: string) {
        console.log(name)
        return `Hello ${name}!`
    }
}