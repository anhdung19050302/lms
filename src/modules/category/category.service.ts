import { Injectable } from '@nestjs/common';
import { XloggerService } from 'src/common/Xlogger/Xlogger.service';
import { BaseService } from 'src/common/base/service/base.service';
import { ExceptionsService } from 'src/common/exceptions/exceptions.service';
import { FileGeneralService } from '../file-general/file-general.service';
import { CreateCategoryDto } from './dto/category.dto';
import { Category } from './entities/category.entity';
import { CategoryRepository } from './repository/category.repository';

@Injectable()
export class CategoryService extends BaseService<Category, CategoryRepository> {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly exceptionService: ExceptionsService,
    private readonly fileGeneralService: FileGeneralService,
    private readonly logger: XloggerService,
  ) {
    super(categoryRepository);
  }

  async create(body: CreateCategoryDto) {
    try {
      this.logger.log('CREATE CATEGORY information: [' + JSON.stringify(body) + ']');
      const newCategory: Category = await this.repository.saveData(this.toCategoryEntity(body));
      if (!newCategory)
        throw this.exceptionService.notFoundException({
          message: 'Category not found.',
        });
      return newCategory;
    } catch (error) {
      this.logger.error('CREATE CATEGORY error: [' + JSON.stringify(error) + ']');
      this.exceptionService.badRequestException({ message: 'Bad request' });
    }
  }

  async findAll(): Promise<Category[]> {
    try {
      this.logger.log('FIND ALL CATEGORY information: []');
      const data = await this.categoryRepository.find();
      if (data.length < 1)
        throw this.exceptionService.notFoundException({
          message: 'List category empty',
        });
      return data;
    } catch (error) {
      this.logger.log('FIND ALL CATEGORY error: [' + JSON.stringify(error.message) + ']');
      throw this.exceptionService.badRequestException({
        message: 'Bad request',
      });
    }
  }

  async findOne(id: number) {
    try {
      this.logger.log('FIND ONE CATEGORY information: [' + JSON.stringify(id) + ']');
      const categoryExist: Category = await this.categoryRepository.findOneById(id);
      if (!categoryExist)
        throw this.exceptionService.notFoundException({
          message: 'Category not found.',
        });
      return categoryExist;
    } catch (error) {
      this.logger.error('FIND ONE CATEGORY error: [' + JSON.stringify(error) + ']');
      this.exceptionService.badRequestException({ message: 'Bad request' });
    }
  }

  // async update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   this.logger.log(
  //     'UPDATE CATEGORY information: [' + JSON.stringify(updateCategoryDto) + id + ']',
  //   );

  //   const cateExist = await this.categoryRepository.findOne({ id });

  //   if (!cateExist)
  //     throw this.exceptionService.badRequestException({
  //       message: `Category ${id} not found`,
  //     });

  //   cateExist.name = updateCategoryDto.name ?? cateExist.name;
  //   cateExist.desc = updateCategoryDto.desc ?? cateExist.desc;

  //   const data = await this.categoryRepository.saveData(cateExist);
  //   return new CategoryPresenter(data);
  // }

  // async uploadFile(id: number, file: Express.Multer.File) {
  //   this.logger.log('UPLOAD CATEGORY FILE information: [' + JSON.stringify + id + ']');

  //   const cateExist = await this.categoryRepository.findOne({ id });
  //   if (!cateExist)
  //     throw this.exceptionService.badRequestException({
  //       message: `Category ${id} not found`,
  //     });
  //   const fileDeleted = cateExist.thumbnail;
  //   const fileThumbnail = await this.fileGeneralService.uploadPublicFile(file);
  //   cateExist.thumbnail = fileThumbnail;
  //   const data = await this.categoryRepository.saveData(cateExist);
  //   await this.fileGeneralService.deleteBlackBlazeFile(fileDeleted);
  //   return data;
  // }

  // async remove(id: number) {
  //   this.logger.log('REMOVE CATEGORY information: [' + JSON.stringify(id) + ']');

  //   const categoryExist: Category = await this.categoryRepository.findOne({
  //     id,
  //   });
  //   if (!categoryExist)
  //     throw this.exceptionService.notFoundException({
  //       message: `Category ${id} not found`,
  //     });
  //   const isDeleted = await this.repository.delete(id);
  //   if (categoryExist.thumbnail)
  //     await this.fileGeneralService.deleteBlackBlazeFile(categoryExist.thumbnail);
  //   if (!isDeleted.affected)
  //     throw this.exceptionService.internalServerErrorException({
  //       message: 'Internal error service',
  //     });
  //   return `Delete category ${id} successfully`;
  // }

  toCategoryEntity(categoryDto: CreateCategoryDto): Category {
    const category = new Category();
    category.name = categoryDto.name;
    return category;
  }
}
