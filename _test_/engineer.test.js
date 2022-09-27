const TeamMember = require("../lib/team-members.js");
const Engineer = require("../lib/engineer.js");

describe("Engineer class", () => {
    describe("getGithub", () => {
        it("adds github", () => {
            const engineer = new Engineer("new github", [{
                name: "katsaymeow"
            }
            ]);
            store.getGithub("katsaymeow");
            expect(store.name.toBe("katsaymeow"))
        });
    });
})