"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const category_dto_1 = require("./category.dto");
class CategoryUpdateDto extends (0, mapped_types_1.PartialType)(category_dto_1.CategoryDto) {
}
exports.CategoryUpdateDto = CategoryUpdateDto;
//# sourceMappingURL=category-update.dto.js.map