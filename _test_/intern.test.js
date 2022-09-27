const TeamMember = require("../lib/team-members.js");
const intern = require('"../lib/intern.js');
const Intern = require("../lib/Intern.js");

describe("Intern class", () => {
    describe("getSchool", () => {
        it("adds school", () => {
            const intern = new Intern("new school info", [{ school: "OSU" }
            ]);
            store.getSchool("OSU");
            expect(store.school.toBe("OSU"))
        });
    });
});