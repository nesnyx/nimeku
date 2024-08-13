<?php

namespace App\Http\Requests\Admin\Anime;


use App\Interfaces\DependencyInjectionRepositoryInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreRequest extends FormRequest
{
    
    protected DependencyInjectionRepositoryInterface $dependencyInjectionRepositoryInterface;

    public function __construct(DependencyInjectionRepositoryInterface $dependencyInjectionRepositoryInterface)
    {
        $this->dependencyInjectionRepositoryInterface = $dependencyInjectionRepositoryInterface;
    }
    public function authorize(): bool
    {
        return $this->dependencyInjectionRepositoryInterface->adminRole();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>"required|unique:animes,name",
            "category"=>"required",
            "video_url"=>"required|url",
            "thumbnail"=>"required|image",
            "rating"=>"required|numeric|min:0|max:5",
            "is_featured"=>"nullable|boolean"
        ];
    }
}
