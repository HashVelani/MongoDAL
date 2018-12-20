import chai = require("chai");
import lodash = require("lodash");
import errors = require("common-errors");
import { error } from "util";

export interface IConnectionStringBuilder
{
    build(options: any): string;
}

export class ConnectionStringBuilder implements IConnectionStringBuilder
{
    public build(options: any): any
    {
        if (lodash.isNull(options) || lodash.isUndefined(options))
        {
            throw new errors.ArgumentNullError('options');
        }
        return "";
    }
}

export const options = {
    server: "my-host",
    port: "123456",
    name: "db-name"
};

const defaultConnectionStringOutput = "mongodb://my-host:123456/db-name";

describe("when build() is called", () =>
{
    describe("without options ", () =>
    {
        let connectionStringBuilder: ConnectionStringBuilder = new ConnectionStringBuilder();
        let connectionString: string;
        let error: errors.ArgumentNullError;
        
        before(() => {
            try
            {
                connectionString = connectionStringBuilder.build(null);
                console.log(connectionString);
            }
            catch(errorObj)
            {
                error = errorObj;
            }
        });
        it("should error", function()
        {
            chai.expect(error).to.not.be.undefined;
            chai.expect(error.name).to.equal("ArgumentNullError");
        });
    });
});
