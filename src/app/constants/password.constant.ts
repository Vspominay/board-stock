import { Validators } from '@angular/forms';

export const PASSWORD_VALIDATOR = Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/);