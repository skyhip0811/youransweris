<?php

namespace App\Admin\Controllers;

use App\Chapters;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ChaptersController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Chapters';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Chapters);

        $grid->column('id', __('Id'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));
        $grid->column('name', __('Name'));
        $grid->column('aurthor_id', __('Aurthor id'));
        $grid->column('book_id', __('Book id'));
        $grid->column('question', __('Question'));
        $grid->column('additionalinfo', __('Additionalinfo'));
        $grid->column('content', __('Content'));
        $grid->column('previous_chapter_id', __('Previous chapter id'));
        $grid->column('endchapter', __('Endchapter'));
        $grid->column('answer', __('Answer'));
        $grid->column('level', __('Level'));

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
        $show = new Show(Chapters::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->field('name', __('Name'));
        $show->field('aurthor_id', __('Aurthor id'));
        $show->field('book_id', __('Book id'));
        $show->field('question', __('Question'));
        $show->field('additionalinfo', __('Additionalinfo'));
        $show->field('content', __('Content'));
        $show->field('previous_chapter_id', __('Previous chapter id'));
        $show->field('endchapter', __('Endchapter'));
        $show->field('answer', __('Answer'));
        $show->field('level', __('level'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Chapters);

        $form->text('name', __('Name'));
        $form->number('aurthor_id', __('Aurthor id'));
        $form->number('book_id', __('Book id'));
        $form->text('question', __('Question'));
        $form->text('additionalinfo', __('Additionalinfo'));
        $form->textarea('content', __('Content'));
        $form->number('previous_chapter_id', __('Previous chapter id'));
        $form->switch('endchapter', __('Endchapter'));
        $form->text('answer', __('Answer'));
        $form->number('level', __('Level'));

        return $form;
    }
}
