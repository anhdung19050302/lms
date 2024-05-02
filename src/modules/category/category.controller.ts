import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExceptionsService } from 'src/common/exceptions/exceptions.service';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly exceptionService: ExceptionsService,
  ) {
    /**Empty */
  }

  // @UseGuards(AuthenGuard)
  // @Roles(UserType.ADMIN, UserType.STUDENT)
  // @Post()
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     fileFilter: imageFileFilter,
  //     limits: {
  //       fileSize: FILE_IMAGE_SIZE,
  //     },
  //   }),
  // )
  // async create(
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [new MaxFileSizeValidator({ maxSize: FILE_IMAGE_SIZE })],
  //     }),
  //   )
  //   file: Express.Multer.File,
  //   @Body() body: CreateCategoryDto,
  // ) {
  //   try {
  //     return await this.categoryService.create(body, file);
  //   } catch (error) {
  //     throw this.exceptionService.badRequestException({
  //       message: error,
  //     });
  //   }
  // }

  @Get()
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id', ParseIntPipe) id: number): Promise<CategoryPresenter> {
  //   try {
  //     return await this.categoryService.findOne(+id);
  //   } catch (error) {
  //     throw this.exceptionService.badRequestException({
  //       message: error.message,
  //     });
  //   }
  // }

  // @UseGuards(AuthenGuard)
  // @Roles(UserType.ADMIN, UserType.STUDENT)
  // @Patch(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateCategoryDto: UpdateCategoryDto,
  // ) {
  //   try {
  //     return await this.categoryService.update(id, updateCategoryDto);
  //   } catch (error) {
  //     throw this.exceptionService.badRequestException({
  //       message: error.message,
  //     });
  //   }
  // }

  // @UseGuards(AuthenGuard)
  // @Roles(UserType.ADMIN, UserType.STUDENT)
  // @Patch('upload/:id')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     fileFilter: imageFileFilter,
  //     limits: {
  //       fileSize: FILE_IMAGE_SIZE,
  //     },
  //   }),
  // )
  // async uploadFile(
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [new MaxFileSizeValidator({ maxSize: FILE_IMAGE_SIZE })],
  //     }),
  //   )
  //   file: Express.Multer.File,
  //   @Param('id', ParseIntPipe) id: number,
  // ) {
  //   try {
  //     return await this.categoryService.uploadFile(+id, file);
  //   } catch (error) {
  //     throw this.exceptionService.badRequestException({
  //       message: error.message,
  //     });
  //   }
  // }

  // @UseGuards(AuthenGuard)
  // @Roles(UserType.ADMIN, UserType.STUDENT)
  // @Delete(':id')
  // async remove(@Param('id', ParseIntPipe) id: number) {
  //   try {
  //     return await this.categoryService.remove(+id);
  //   } catch (error) {
  //     throw this.exceptionService.badRequestException({
  //       message: error.message,
  //     });
  //   }
  // }
}
