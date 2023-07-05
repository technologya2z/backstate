package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class DatabaseInfoTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DatabaseInfo.class);
        DatabaseInfo databaseInfo1 = new DatabaseInfo();
        databaseInfo1.setId(1L);
        DatabaseInfo databaseInfo2 = new DatabaseInfo();
        databaseInfo2.setId(databaseInfo1.getId());
        assertThat(databaseInfo1).isEqualTo(databaseInfo2);
        databaseInfo2.setId(2L);
        assertThat(databaseInfo1).isNotEqualTo(databaseInfo2);
        databaseInfo1.setId(null);
        assertThat(databaseInfo1).isNotEqualTo(databaseInfo2);
    }
}
