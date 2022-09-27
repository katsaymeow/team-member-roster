const TeamMember = require("../lib/team-members.js");
const Manager = require("../lib/manager.js");

describe("Manager class", () => {
    describe("officeNumber", () => {
        it("adds office number", () => {
            const manager = new Manager('new manager', [{ officeNumber: "19" }
            ]);
            store.getRole('manager');
            expect(store.officeNumber.toBe("sansa"))
        });
    });
})