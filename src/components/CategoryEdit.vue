<template>
    <div class="col s12 m6">
        <div>
          <div class="page-subtitle">
            <h4>Редактировать</h4>
          </div>

          <form>
            <div class="input-field" >
              <select ref="select">
                <option
                  v-for="c of categories"
                  :key="c"
                  :value="c.id"
                >
                  {{ c.title }}
                </option>
              </select>
              <label>Выберите категорию</label>
            </div>

            <div class="input-field">
              <input 
               type="text"
               v-model="title"
               :class="{invalid: $v.title.$dirty && !$v.title.required}"
               id="name"
               >
              <label for="name">Название</label>
              <span v-if="$v.title.$dirty && !$v.title.required" class="helper-text invalid">
                    Введите название категории
              </span>
            </div>

            <div class="input-field">
              <input
                  id="limit"
                  type="number"
                  v-model="limit"
                  :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
              >
              <label for="limit">Лимит</label>
              <span v-if="$v.limit.$dirty && !$v.limit.minValue"
               class="helper-text invalid"
               >
                 Минимальная величина {{ $v.limit.$params.minValue.min }}
               </span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Обновить
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min';
import {required, minValue} from 'vuelidate/lib/validators';
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      select: null,
      title: '',
      limit: 10,
    }
  },
   validations: {
        title: {required},
        limit: {minValue: minValue(1)}
    },
  mounted() {
    M.updateTextFields();
    this.select = M.FormSelect.init(this.$refs.select);
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  }
}
</script>