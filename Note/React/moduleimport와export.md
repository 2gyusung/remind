# module import와 export

# export vs export default

우리가 **import 해올 때 중괄호 를 사용해서 데리고 오는 것**이 있는가 하면, **중괄호 없이 데리고 오는 것** 이 있습니다.

**중괄호의 사용 여부는 export를 하냐 export default를 하느냐에 따라 결정**됩니다.

**export**를 사용하게 되면 **한 컴포넌트 내에서 여러개를 내보내기 때문에 중괄호를 사용해 필요한 것들만 import**합니다.

하지만 **export default**를 사용하게 되면 **한 컴포넌트에서 한개만 내보내기 때문에 중괄호를 사용하지 않고 import** 하게 됩니다.

#
### 한눈에 정리

> **💡 export vs export default**
> 
> - **`export`**
>     - **중괄호를 사용해서 import** 해옵니다.
>     - **한 컴포넌트 내에서 여러개를 내보낼 때 사용**합니다.
>     - import 해올 때는 **export한 이름 그대로 불러와야** 합니다.
>     - 한번에 묶어서 import 할 시에는 **`import * as S from ‘경로’`** 를 이용합니다.
> - **`export default`**
>     - **중괄호 없이 import** 해옵니다.
>     - import 해올 때 **export 한 이름이 아니어도 괜찮습니다.**
>         - 한 컴포넌트에서 한개만 export했기 때문에 파일의 경로만 제대로 지정되면 이름이 어떤것이든 상관없이 잘 불러옵니다.