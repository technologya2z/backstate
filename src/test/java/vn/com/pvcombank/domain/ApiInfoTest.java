package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class ApiInfoTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ApiInfo.class);
        ApiInfo apiInfo1 = new ApiInfo();
        apiInfo1.setId(1L);
        ApiInfo apiInfo2 = new ApiInfo();
        apiInfo2.setId(apiInfo1.getId());
        assertThat(apiInfo1).isEqualTo(apiInfo2);
        apiInfo2.setId(2L);
        assertThat(apiInfo1).isNotEqualTo(apiInfo2);
        apiInfo1.setId(null);
        assertThat(apiInfo1).isNotEqualTo(apiInfo2);
    }
}
