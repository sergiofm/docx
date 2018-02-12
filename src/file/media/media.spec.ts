import { expect } from "chai";
// import * as mock from "mock-fs";

import { Media } from "./media";

describe.only("Media", () => {
    describe("#constructor()", () => {
        beforeEach(() => {});
        it("should create section properties with options", () => {
            const media = new Media();
            // mock({
            //     "package.json": mock.file({
            //         content: "file content here",
            //         ctime: new Date(1),
            //         mtime: new Date(1),
            //     }),
            // });

            media.addMedia("demo/images.dog.png", 1);
            expect(media.array.length).to.equal(1);
            // tslint:disable-next-line:no-unused-expression
            // expect(media.getMedia("test.jpg")).to.not.be.undefined;
            // mock.restore();
        });
    });
});
