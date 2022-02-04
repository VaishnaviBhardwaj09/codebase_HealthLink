import { Router } from 'express';
import { DemoController } from '../DemoManagement/controller/demoController';
import { User } from '../DemoManagement/model/modelDemo';
export default class MainRouter {

    router: Router;
    demo:DemoController;


    constructor() {

        // Initialize controllers objects
        this.demo=new DemoController(User)

        // Initialize router object
        this.router = Router({ mergeParams: true })
        this.demorouter()
        
  

    }
    demorouter(){
        this.router.route('/api/v1/users')
        .get(this.demo.readAll)
        .post(this.demo.create)
    }

 

 

}