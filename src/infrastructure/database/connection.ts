/*
    ~~ database connect.

    - for types database [ mySQL, mongo DB, SQL server....]

    
*/


export default class Db {
    constructor (database: Function) {
        this.database: Function = database;
    }

    Start() {
        new this.database().Connection();
    }

}
