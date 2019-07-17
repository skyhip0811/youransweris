<?php

namespace App\Admin\Controllers;

use App\Books;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class BooksController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Books';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Books);

        $grid->column('id', __('Id'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));
        $grid->column('name', __('Name'));
        $grid->column('author_id', __('Author id'));
        $grid->column('desc', __('Desc'));
        $grid->column('cover', __('Cover'));
        $grid->column('type_id', __('Type id'));
        $grid->column('max_level', __('Max level'));
        $grid->column('total_chapter_numbers', __('Chapter Counts'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Books::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->field('name', __('Name'));
        $show->field('author_id', __('Author id'));
        $show->field('desc', __('Desc'));
        $show->field('cover', __('Cover'));
        $show->field('type_id', __('Type id'));
        $show->field('max_level', __('Max level'));
        $show->field('total_chapter_numbers', __('Chapter Counts'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Books);

        $form->text('name', __('Name'));
        $form->number('author_id', __('Author id'));
        $form->text('desc', __('Desc'));
        $form->image('cover', __('Cover'));
        $form->number('type_id', __('Type id'));
        $form->number('max_level', __('Max level'));
        $form->number('total_chapter_numbers', __('Chapter Counts'));

        return $form;
    }
}
