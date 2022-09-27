const TeamMember = require("../lib/team-members.js");

describe("TeamMember class", () => {
    describe("getName", () => {
        it("adds name", () => {
            const teamMember = new TeamMember('new team member', [{ name: "sansa" }
            ]);
            store.getName("sansa");
            expect(store.name.toBe("sansa"))
        });
    });
    describe("getId", () => {
        it("adds id", () => {
            const teamMember = new TeamMember('new team member', [{ name: "3" }
            ]);
            store.getId("3");
            expect(store.id.toBe("3"))
        });
    });
    describe("getEmail", () => {
        it("adds email", () => {
            const teamMember = new TeamMember('new team member', [{ name: "em@email.com" }
            ]);
            store.getEmail("em@email.com");
            expect(store.email.toBe("em@email.com"))
        });
    });
    describe("getRole", () => {
        it("adds selected role", () => {
            const teamMember = new TeamMember('new team member', [{ name: "Team Member" }
            ]);
            store.getName("Team Member");
            expect(store.name.toBe("Team Member"))
        });
    });
})

