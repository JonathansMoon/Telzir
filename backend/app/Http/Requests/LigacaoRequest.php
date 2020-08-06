<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LigacaoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "plano"             => "required|numeric",
            "minutos"           => "required|numeric",
            "codigo_origem"     => "required|exists:codigos,id",
            "codigo_destino"    => "required|exists:codigos,id"
        ];
    }

    public function messages() {
        return [
            "required"  => "O campo :attribute é obrigatório.",
            "exists"    => "O valor :attribute não existe na tabela."
        ];
    }
}
